<template>
  <div class="vod-item" @click="openVodItem(videoUrl)">
    <SkeletonBox v-if="isLoading" width="100%" height="20vw" />
    <template v-else>
      <div class="thumbnail">
        <img class="img" :src="thumbnailUrl" />
        <img class="play-btn" :src="$assetsUrl('btn-next.png')" />
      </div>
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SkeletonBox from '../SkeletonBox.vue';

export default {
  name: 'HomeVodsItem',

  components: {
    SkeletonBox,
  },

  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    thumbnailUrl: { type: String, default: '' },
    videoUrl: { type: String, default: '' },
    publishTime: { type: String, default: '' },
    isLoading: { type: Boolean, default: false },
  },

  methods: {
    ...mapActions('Modal', ['openModal']),
    ...mapActions('Game', ['setYoutubeId']),

    openVodItem(videoUrl) {
      const link = videoUrl;
      const youtubeId = link.substring(link.indexOf('=') + 1, link.length);

      this.setYoutubeId(youtubeId);
      this.openModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.vod-item {
  background-color: #f3c63c;
  cursor: pointer;
  width: 29vw;
  margin: 0 0.5vw 2vw 0.5vw;

  .thumbnail {
    height: 15vw;
    position: relative;

    .img {
      @include sizeWH(100%, 100%);
    }
  }

  .title {
    @include textMixin(#000, 1.9vw, bold, uppercase, $align: left);
    @include ellipsis();
    width: 100%;
    padding: 1vw 0 0 1vw;

    @include web-md {
      font-size: 2.4vw;
    }
    @include web-sm {
      font-size: 3.4vw;
    }
    @include web-xs {
      font-size: 4.4vw;
    }
  }
  .subtitle {
    @include textMixin(#000, 1.3vw, $align: left);
    @include ellipsis();
    width: 100%;
    padding: 0.2vw 1vw 0 1vw;

    @include web-xl {
      font-size: 1.5vw;
    }
    @include web-md {
      font-size: 1.9vw;
    }
    @include web-sm {
      font-size: 2.8vw;
    }
    @include web-xs {
      font-size: 3.4vw;
    }
  }

  .play-btn {
    @include alignCenter();
    @include sizeWH(6.5vw, 6.5vw);
    &:hover {
      filter: brightness(1.1);
    }
  }

  @include web-sm {
    width: 60vw;

    .thumbnail {
      height: 28vw;
    }
  }

  @include web-xs {
    .thumbnail {
      height: 30vw;
    }
  }
}
.vod-item + .vod-item {
  @include web-lg {
    margin-left: 0;
  }
}
</style>
