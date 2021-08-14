<template>
  <div class="label">
    <div class="tab" @click="changeTab">
      {{ tab }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'HomeTab',
  mixins: [clickaway],

  props: {
    name: { type: String, required: true },
    tab: { type: String, required: true },
  },

  methods: {
    changeTab() {
      this.$router.push({ path: `/${this.name}` }, () => {});
    },
  },

  computed: {
  },
};
</script>

<style lang="scss" scoped>
.tab {
  word-wrap: nowrap;
  cursor: pointer;
  white-space: nowrap;
  margin-left: 1vw;
  margin-right: 1vw;
  padding-top: 0.1vw;

  &.inactive {
    @include textMixin(#112952, 1.2vw, bold);
  }
  &.active {
    @include textMixin(#112952, 1.2vw, bold);
  }
  &:hover {
    @include textMixin(#000, 1.2vw, bold);
  }

  @include web-sm {
    font-size: 3.7vw;
  }
}
</style>
