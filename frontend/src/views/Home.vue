<template>
  <BaseLayout :type="pageType">
    <div slot="content">
      <div class="banner">
        <img src="/cdn/assets/banner.jpeg" />
        <div class="title">Covid-19 Information</div>
        <div class="subtitle">last updated August 14, 2021, 12:00 AM</div>
      </div>
      <div class="covid-update">
        <div class="daily">
          <div class="label">Daily Cases</div>
          <div class="number">50</div>
          <div class="source">Source: MOH Daily Update</div>
        </div>
        <div class="vaccination">
          <div class="label">Vaccination Progress</div>
          <div class="number">80%</div>
          <div class="source">Source: MOH Daily Update</div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BaseLayout from "../common/components/home/BaseLayout.vue";
import utils from "../utils";

export default {
  name: "EventHome",

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
      pageName: "home",
      email: "",
    };
  },

  methods: {
    submit() {},
  },

  computed: {},
};
</script>

<style lang="scss" scoped>
.banner {
  margin: 1vw auto 0;
  position: relative;
  img {
    @include sizeWH(100%, 50%);
    filter: brightness(50%);
  }
  .title {
    @include textMixin(#fff, 3vw, bold);
    @include position(absolute, $top: 20vw, $left: 3vw);
  }
  .subtitle {
    @include textMixin(#f5f61c, 1.6vw, italic);
    font-style: italic;
    @include position(absolute, $top: 24vw, $left: 3.2vw);
  }
}
.covid-update {
  @include flexCenter(row);
  @include textMixin(#000, 1.5vw);
  text-align: left;
  margin-top: 1vw;
  margin-left: 3.2vw;
  justify-content: flex-start;

  .label {
    padding-bottom: 0.2vw;
    border-bottom: 0.1vw solid #000;
  }
  .number {
    @include textMixin(#000, 4.5vw);
    margin-top: 1vw;
  }
  .daily {
    width: 25vw;
    margin-right: 1vw;
  }
  .vaccination {
    width: 25vw;
  }
  .source {
    @include textMixin(#0645AD, 1vw);
    cursor: pointer;
  }
}
</style>
