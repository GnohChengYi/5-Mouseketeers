<template>
  <div class="news-item" @click="openNewsItem(slugTitle)">
    <SkeletonBox v-if="isLoading" width="100%" height="20vw" />
    <template v-else>
      <div class="thumbnail">
        <img :src="titleImage" />
      </div>
      <div class="text">
        <div class="title">{{ title }}</div>
        <div class="subtitle">{{ subTitle }}</div>
      </div>
    </template>
  </div>
</template>

<script>
import SkeletonBox from '../SkeletonBox.vue';

export default {
  name: 'HomeNewsItem',

  components: {
    SkeletonBox,
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
.news-item {
  @include flexCenter(column);
  cursor: pointer;
  width: 100%;

  .thumbnail {
    @include sizeWH(100%, auto);
    img {
      @include sizeWH(100%, 100%);
    }
  }

  & + & {
    margin-left: 0.3rem;
  }

  @include web-lg {
    width: 65%;
    .thumbnail {
      @include sizeWH(100%, auto);
    }
    & + & {
      margin-left: 0;
      margin-top: 0.3rem;
    }
  }

  @include web-sm {
    width: 80%;
  }
}

.text {
  @include sizeWH(100%, 8vw);
  background-color: #f3c63c;
  padding: 0.04rem 0.15rem 0.01rem 0.15rem;

  @include web-xxl {
    height: 6vw;
  }

  @include web-lg {
    height: auto;
    padding-bottom: 0.1rem;
    margin-top: -0.1rem;
  }

  .title {
    @include textMixin(#000, 1.8vw, bold, uppercase);
    text-align: left;

    @include web-xl {
      font-size: 2.2vw;
    }
    @include web-lg {
      font-size: 3.2vw;
    }
    @include web-sm {
      font-size: 4.5vw;
    }
    @include web-xs {
      font-size: 5.3vw;
    }
  }

  .subtitle {
    @include textMixin(#000, 1.25vw);
    text-align: left;

    @include web-xl {
      font-size: 1.4vw;
    }
    @include web-lg {
      font-size: 2.5vw;
    }
    @include web-sm {
      font-size: 3.7vw;
    }
    @include web-xs {
      font-size: 4.3vw;
    }
  }
}
</style>
