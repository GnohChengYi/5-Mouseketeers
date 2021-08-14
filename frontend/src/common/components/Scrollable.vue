<template>
  <div class="scrollable">
    <div class="content" ref="content" @scroll.passive="scroll">
      <slot />
    </div>
    <transition name="fade">
      <div class="shadow top" v-if="top" />
    </transition>
    <transition name="fade">
      <div class="shadow bottom" v-if="bottom" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Scrollable',

  props: {
    noshadow: { type: Boolean, default: false },
  },

  data() {
    return {
      top: false,
      bottom: false,
    };
  },

  mounted() {
    this.scroll();
  },

  methods: {
    scroll() {
      if (this.noshadow) return;
      if (this.$refs.content) {
        const { offsetHeight, scrollHeight, scrollTop } = this.$refs.content;
        this.top = scrollTop > 0;
        this.bottom = scrollTop + offsetHeight < scrollHeight;
      }
    },
  },
};
</script>

<style scoped>
.scrollable {
  display: flex;
  overflow-y: auto;
}

.content {
  width: 100%;
  overflow-y: auto;
}

.shadow {
  position: absolute;
  right: 0;
  left: 0;
  height: 0.3rem;
  pointer-events: none;
}

.top {
  top: 0;
  background: linear-gradient(#222, rgba(34, 34, 34, 0));
}

.bottom {
  bottom: 0;
  background: linear-gradient(rgba(34, 34, 34, 0), #222);
}

.scrollable ::-webkit-scrollbar {
  width: 0.18rem;
  background: #8f8f8f;
}

.scrollable ::-webkit-scrollbar-track {
  border-radius: 0;
}

.scrollable ::-webkit-scrollbar-thumb {
  border-radius: 0;
  background: #606060;
}

.scrollable ::-webkit-scrollbar-thumb:window-inactive {
  background: #606060;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
