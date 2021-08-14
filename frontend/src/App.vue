<template>
  <div id="app">
    <div class="main" v-if="isInitialized">
      <router-view />
    </div>
    <GameBoardPopup />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import GameBoardPopup from './common/components/GameBoardPopup.vue';

export default {
  name: 'App',

  components: {
    GameBoardPopup,
  },

  data() {
    return { isInitialized: false };
  },

  computed: {
  },

  async created() {
    this.isLoading = true;

    try {
      this.isInitialized = true;
    } catch (err) {
      this.setError(err.response?.data?.msg || 'error-message');
    }
    this.isLoading = false;
  },

  methods: {

  },
};
</script>

<style lang="scss">
/* setup app container */
#app {
  @include sizeWH(100%, 100%);
  position: relative;
  z-index: 1;
  font-size: 0.36rem;
  font-family: "Open Sans",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: auto;
  text-align: center;
}
</style>
