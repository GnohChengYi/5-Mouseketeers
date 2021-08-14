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

  &.inactive {
    @include textMixin(#000, 2.8vw);
  }
  &.active {
    @include textMixin(#f3c63c, 2.8vw);
  }
  &:hover {
    @include textMixin(#000);
    background: #f3c63c;
  }

  @include web-sm {
    font-size: 3.7vw;
  }
}
</style>
