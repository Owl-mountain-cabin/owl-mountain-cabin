import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@/styles/_index.scss";

import { mdiPlus } from "@mdi/js";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg",
    values: {
      plus: mdiPlus,
    },
  },
});
