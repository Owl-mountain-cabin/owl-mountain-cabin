<template>
  <appLayout>
    <cHeader />
    <v-main>
      <router-view></router-view>
    </v-main>
    <cFooter />
    <popup2 />
  </appLayout>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue";
import CHeader from "@/layouts/Header.vue";
import CFooter from "@/layouts/Footer.vue";
// import Popup from "@/components/Popup.vue";
import Popup2 from "@/components/Popup2.vue";
import { defaultMeta } from "@/utils/meta/default";
import contents from "@/constants/common/index.json";

export default {
  name: "App",
  metaInfo: {
    meta: defaultMeta,
  },
  components: {
    AppLayout,
    CHeader,
    CFooter,
    // Popup,
    Popup2,
  },
  data() {
    return {
      title: contents.bannerTitle,
      desc: contents.phone,
    };
  },
};
</script>
<style lang="scss" scoped></style>
