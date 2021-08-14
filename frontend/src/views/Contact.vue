<template>
  <BaseLayout :type="pageType">
    <div slot="content">
      <div class="label">Contact</div>
      <div class="label">Name</div>
      <div class="input">
        <div class="overlay"></div>
        <input type="text" v-model="email" />
      </div>
      <div class="label">Email</div>
      <div class="input">
        <div class="overlay"></div>
        <input type="text" v-model="email" />
      </div>
      <div class="label">Subject</div>
      <div class="input">
        <div class="overlay"></div>
        <input type="text" v-model="email" />
      </div>
      <div class="label">Message</div>
      <div class="input">
        <div class="overlay"></div>
        <input type="text" v-model="email" />
      </div>
      <span @click="subscribe">Subscribe</span> 
    </div>
  </BaseLayout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BaseLayout from '../common/components/home/BaseLayout.vue';
import utils from '../utils';

export default {
  name: 'EventContact',

  components: {
    BaseLayout,
  },

  props: {
    pageType: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      pageName: 'contact',
    };
  },

  methods: {},

  computed: {},
};
</script>

<style lang="scss" scoped>
.label {
  @include textMixin(#000, 2.5vw, bold, uppercase);
  text-align: left;

  @include web-sm {
    font-size: 7vw;
  }
}
</style>
