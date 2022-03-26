import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@mdi/font/css/materialdesignicons.css";
import "@/styles/_index.scss";

Vue.use(Vuetify);

export default new Vuetify({
  icons: { iconfont: "mdi" },
});
