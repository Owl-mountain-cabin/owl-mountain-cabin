import Vue from "vue";
import App from "./App.vue";
import router from "@/routes";
import vuetify from "./plugins/vuetify";

console.log(router);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  vuetify,
  router,
}).$mount("#app");
