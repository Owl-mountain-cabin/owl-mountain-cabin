import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./paths";

Vue.use(VueRouter);

export default new VueRouter({
  routes,
  mode: "history",
  // base: process.env.BASE_URL,
});
