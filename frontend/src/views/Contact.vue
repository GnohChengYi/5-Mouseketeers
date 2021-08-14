<template>
  <BaseLayout :type="pageType">
    <div slot="content">
      <div class="subscribe">
        Subscribe to our newsletter to get daily updates
      </div>
      <div class="container">
        <form @submit.prevent="sendEmail">
          <div class="label">Email</div>
          <input
            type="email"
            v-model="email"
            name="email"
            placeholder="Your Email"
          />
          <div class="label">Individual Topics</div>
          <div>
            <multiselect
              class="individual"
              v-model="value"
              :options="individualCategories"
            ></multiselect>
          </div>

          <div class="label">Business Topics</div>
          <div>
            <multiselect
              class="business"
              v-model="value"
              :options="businessCategories"
            ></multiselect>
          </div>

          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../common/components/home/BaseLayout.vue";
import emailjs from "emailjs-com";
import Multiselect from "vue-multiselect";
import utils from "../utils";

export default {
  name: "EventContact",

  components: {
    BaseLayout,
    Multiselect,
  },

  props: {
    pageType: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      pageName: "contact",

      individualCategories: [
        "COVID-19 Test",
        "COVID-19 Vaccination",
        "Financial Assistance",
        "Law and Enforcement",
        "Safe Management Measures",
        "Travel and Quarantine",
      ],
      businessCategories: [
        "Assistance",
        "Law and Enforcement",
        "Safe Management Measures",
      ],
    };
  },

  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_jovlgjf",
          "template_lpx9ove",
          e.target,
          "user_P6gJwOR7kCWx2Iw5Al36K",
          {
            //name: this.name,
            email: this.email,
            icategory: this.icategory,
            bcategory: this.bcategory,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.email = "";
      this.icategory = "";
      this.bcategory = "";
    },
  },

  computed: {},
};
</script>
  
<style scoped>
* {
  box-sizing: border-box;
}
label {
  font-size: 24px;
  float: left;
}
input[type="text"],
[type="email"],
textarea {
  font-size: 16px;
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 12px;
  margin-bottom: 30px;
  resize: vertical;
}
input[type="submit"] {
  font-size: 16px;
  background-color: #4fc3f7;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type="submit"]:hover {
  background-color: #b8c7b9;
}
.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #fafafa;
  margin-top: 4vw;
  border-radius: 10px;
  padding: 40px;
  width: 50%;
}
</style>


<style lang="scss" scoped>
.subscribe {
  @include textMixin(#000, 2vw);
  margin-top: 1vw;
}
.label {
  @include textMixin(#000, 2vw);
  text-align: left;
}
</style>
