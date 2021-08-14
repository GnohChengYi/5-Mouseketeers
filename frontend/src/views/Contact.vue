<template>
  <BaseLayout :type="pageType">
    <div slot="content">
      <div class="container">
        <form @submit.prevent="sendEmail">
          <label>Email</label>

          <input
            type="email"
            v-model="email"
            name="email"
            placeholder="Your Email"
          />
          <h5>Individual Category</h5>
          <a v-for="iCategory in individualCategories" v-bind:key="iCategory">
            <input type="checkbox" id="iCategory" v-bind:key="iCategory" />
            <label for="iCategory" v-bind:key="iCategory">{{
              iCategory
            }}</label>
          </a>

          <label>Business Category</label>

          <input
            type="text"
            v-model="bcategory"
            name="bcategory"
            placeholder="Business category"
          />

          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../common/components/home/BaseLayout.vue";
import emailjs from "emailjs-com";
import utils from "../utils";

export default {
  name: "EventContact",

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
        console.log("it works!!!");
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
  margin-top: 100px;
  border-radius: 10px;
  padding: 40px;
  width: 50%;
}
</style>


<style lang="scss" scoped>
.label {
  @include textMixin(#000, 2.5vw, bold, uppercase);
  text-align: left;

  @include web-sm {
    font-size: 7vw;
  }
}
</style>
