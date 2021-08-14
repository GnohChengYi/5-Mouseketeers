<template>
  <div class="item" @click="openNewsItem(slugTitle)">
    <GreySkeletonBox v-if="isLoading" width="100%" height="2.51rem" />
    <template v-else>
      <div class="thumbnail">
        <img :src="titleImage" />
      </div>

      <div class="text">
        <template>
          <div class="title">{{ title }}</div>
          <div class="subtitle">{{ subTitle }}</div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import GreySkeletonBox from '../GreySkeletonBox.vue';

export default {
  name: 'NewsItem',

  components: {
    GreySkeletonBox,
  },

  props: {
    title: { type: String, default: '' },
    slugTitle: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    titleImage: { type: String, default: '' },
    publishTime: { type: String, default: '' },
    isLoading: { type: Boolean, default: false },
  },

  methods: {
    openNewsItem(slug) {
      this.$router.push({ path: `/news/${slug}/` }, () => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  @include flexCenter(row);
  cursor: pointer;
  margin-bottom: 2vw;

  .thumbnail {
    min-width: 36vw;
    height: 22vw;
  }

  .text {
    @include sizeWH(100%, 22vw);
    background-color: #343848;
    padding: 3vw;

    .title {
      @include textMixin(#fff, 3.2vw, bold, uppercase);
      padding-bottom: 2vw;
      text-align: left;

      @include web-lg {
        font-size: 3.4vw;
      }
      @include web-sm {
        font-size: 3.8vw;
      }
    }
    .subtitle {
      @include textMixin(#fff, 2vw);
      padding-right: 3vw;
      text-align: left;

      @include web-lg {
        font-size: 2.3vw;
      }
      @include web-sm {
        font-size: 3.1vw;
      }
    }
  }
}
</style>
