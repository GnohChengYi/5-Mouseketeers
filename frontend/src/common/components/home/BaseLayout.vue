<template>
  <div class="base-layout">
    <div :class="['header', { toggled }]">
      <div class="navbar">
        <div :class="['tabs', { hidden }]">
          <Tab
            v-for="(page, i) in toggledPages"
            :name="page.name"
            :tab="page.tab"
            :key="i"
            :class="[
              'tab',
              {
                active: page.name === type,
                inactive: page.name !== type,
              },
            ]"
          />
        </div>
      </div>
      <button class="btn-toggle" @click="triggerToggle" />
    </div>
    <div :class="['content', type]">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import Tab from './HomeTab.vue';
import homePages from '../../../pages/homeTab';

export default {
  name: 'BaseLayout',

  components: {
    Tab,
  },

  props: {
    type: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      pages: homePages,
      hidden: true,
      toggled: false,
    };
  },

  computed: {
    toggledPages() {
      return this.pages;
    },
  },

  methods: {
    returnHome() {
      if (this.$route.path !== '/home') {
        this.$router.push('/');
      }
    },

    triggerToggle() {
      this.toggled = !this.toggled;
    },
  },
};
</script>

<style lang="scss" scoped>
.base-layout {
  scroll-behavior: smooth;
}

.header {
  @include flexCenter(row);
  width: 90%;
  margin: 0 auto;
  position: relative;

  .navbar {
    .tabs {
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 3vw;
    }
  }

  .btn-toggle {
    @include imageCDN('btn-menu.png', 6vw, 6vw);
    @include position(absolute, $top: 1vw, $right: 1vw);
    display: none;
    border: transparent;
  }

  @include web-lg {
    @include sizeWH(100%, 8vw);
    background: #000;
    margin-bottom: 5vw;
    transition: all 0.5s ease-in-out;

    .btn-toggle {
      right: 1vw;
      display: block;
    }

    .top-line {
      display: none;
    }
    .logo {
      @include sizeWH(12vw, 12vw);
      top: 1.4vw;
      margin-left: 3vw;
    }

    .navbar {
      .tabs {
        @include flexCenter(column);
        width: 100%;
        justify-content: flex-end;
        display: none;
      }
    }

    &.toggled {
      @include flexCenter(column);
      height: auto;
      padding-bottom: 2vw;
      transition: all 0.3s ease-in-out;

      .navbar {
        .tabs {
          display: block;
        }
      }
    }
  }
}
</style>
