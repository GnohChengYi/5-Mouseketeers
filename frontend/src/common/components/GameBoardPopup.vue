<template>
  <div>
    <ModalVideo v-if="openVideo" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ModalVideo from './modals/ModalVideo.vue';

export default {
  name: 'GameBoardPopup',

  components: {
    ModalVideo,
  },

  computed: {
    ...mapState('Modal', ['openVideo']),
  },

  methods: {
    ...mapActions('Modal', ['openModal', 'closeModals']),
  },
};
</script>
