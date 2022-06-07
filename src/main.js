import Vue from "vue";
import App from "./App.vue";
import router from "@/routes";
import vuetify from "./plugins/vuetify";
import "aos/dist/aos.css";
import Meta from "vue-meta";

Vue.config.productionTip = false;
Vue.use(Meta, {
  attribute: "data-vue-meta",
});
new Vue({
  render: (h) => h(App),
  vuetify,
  router,
}).$mount("#app");
