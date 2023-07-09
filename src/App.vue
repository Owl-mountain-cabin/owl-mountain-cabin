<template>
  <appLayout>
    <cHeader />
    <v-main>
      <router-view></router-view>
    </v-main>
    <cFooter />
  </appLayout>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue";
import CHeader from "@/layouts/Header.vue";
import CFooter from "@/layouts/Footer.vue";
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
  },
  data() {
    return {
      title: contents.bannerTitle,
      desc: contents.phone,
      popup: null,
    };
  },
  mounted() {
    if (!this.isMobile()) {
      this.getNoticePopup();
    }
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
    getNoticePopup() {
      const width = 515;
      const height = 737;
      const top = 0;
      const left = 0;

      window.open(
        "https://www.owlmtcabin-official.com/image/income.webp",
        "_blank",
        `width=${width}, height=${height}, top=${top}, left=${left}`
      );

      // const loop = setInterval(
      //   (function () {
      //     if (popup.closed) {
      //       clearInterval(loop);

      //       this.setStorage("popup", "true", 3000);
      //     }
      //   })(this),
      //   500
      // );
    },
    // setStorage(keyName, keyValue, tts) {
    //   console.log("setStorage");
    //   const obj = {
    //     value: keyValue,
    //     expire: Date.now() + tts,
    //   };

    //   const objString = JSON.stringify(obj);
    //   window.localStorage.setItem(keyName, objString);
    // },
  },
};
</script>
<style lang="scss" scoped></style>
