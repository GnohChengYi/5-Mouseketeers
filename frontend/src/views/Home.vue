<template>
  <BaseLayout :type="pageType">
    <div slot="content">
      <div class="label">Covid Update</div>
      <div class="covid-update">
        <div class="label">Daily Cases</div>
        <div class="label">Vacination Progress</div>
      </div>

      <div class="label">Categories</div>
      <div class="categories">
        <div class="label">Sports</div>
        <div class="label">Dining</div>
        <div class="label">Gathering</div>
        <div class="label">Event</div>
      </div>

      <div class="label">Newsletter</div>
      <div class="input">
        <div class="overlay"></div>
        <input type="text" v-model="email" />
        <span @click="submit">Submit</span>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BaseLayout from '../common/components/home/BaseLayout.vue';
import utils from '../utils';

export default {
  name: 'EventHome',

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
      pageName: 'home',
      email: '',
    };
  },

  methods: {
    submit() {

    },
  },

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

.covid-update {
  @include flexCenter(row);
}
.categories {
  @include flexCenter(row);
}
</style>
