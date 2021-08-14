<template>
  <div class="modal" @click="close">
    <div class="dialog">
      <iframe
        class="video"
        :src="embeddedVideo"
        modestbranding="1"
        frameborder="0"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ModalVideo',

  computed: {
    ...mapState('Game', ['youtubeId']),

    embeddedVideo() {
      return `https://www.youtube.com/embed/${this.youtubeId}?autoplay=1`;
    },
  },

  methods: {
    ...mapActions('Modal', ['closeModals']),
    close() {
      this.closeModals();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  @include position(fixed, 0, 0, 0, 0, $z-index: 2);
  @include flexCenter(row);
  background: rgba(0, 0, 0, 0.8);
  font-size: 0.36rem;
}

.dialog {
  @include sizeWH(80vw, 50vw);
  @include flexCenter(column);
  position: relative;
  background: #222;

  .video {
    @include position(absolute, 0, 0, 0, 0);
    @include sizeWH(100%, 100%);
  }
}

@include queryPhone {
  .dialog {
    @include sizeWH(16.14rem, 8.45rem);
  }
}

.modal-enter {
  opacity: 0;
}

.modal-enter .dialog {
  transform: scale(0.8);
}

.modal-enter-active {
  transition: opacity 200ms;
}

.modal-enter-active .dialog {
  transition: transform 200ms;
}
</style>
