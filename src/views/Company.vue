<template>
  <div class="owl-company">
    <div class="owl-company__first-section">
      <Dimmed :height="'100%'" />
      <ImageWrapper :imageSrc="'franchise-header-image.png'" title="Company" />
    </div>
    <div class="owl-company__section owl-company__second-section">
      <SecondSection />
    </div>
    <Banner :title="title" :desc="desc" />
  </div>
</template>

<script>
import Dimmed from "@/components/Dimmed.vue";
import ImageWrapper from "@/components/ImageWrappers.vue";
import SecondSection from "@/features/company/SecondSection.vue";
import Banner from "@/components/Banner.vue";
import contents from "@/constants/common/index.json";
import { companyMeta } from "@/utils/meta/company";

export default {
  name: "Company",
  metaInfo: companyMeta,
  components: {
    Dimmed,
    ImageWrapper,
    SecondSection,
    Banner,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      title: contents.bannerTitle,
      desc: contents.phone,
    };
  },
};
</script>

<style lang="scss">
.owl-company {
  $this: "owl-company";
  .#{$this}__section {
    height: 100vh;
  }
  .#{$this}__first-section {
    position: relative;
  }
  .#{$this}__second-section {
    padding-top: 207px;
    padding-bottom: 207px;
  }
}
</style>
