<template>
  <div class="owl-company">
    <div class="owl-company__first-section">
      <Dimmed :height="'100%'" />
      <ImageWrapper :imageSrc="'franchise-header-image.webp'" title="Company" />
    </div>
    <div class="owl-company__section owl-company__second-section">
      <SecondSection />
    </div>
    <div class="owl-company__section owl-company__third-section">
      <ThirdSection />
    </div>
    <Banner :title="title" :desc="desc" />
  </div>
</template>

<script>
import Dimmed from "@/components/Dimmed.vue";
import ImageWrapper from "@/components/ImageWrappers.vue";
import SecondSection from "@/features/company/SecondSection.vue";
import ThirdSection from "@/features/company/ThirdSection.vue";
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
    ThirdSection,
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
    padding: 0 180px;
    background-color: rgba($color: #fffdf8, $alpha: 1);
    height: 619px;
    @include flex-center;
  }
  .#{$this}__third-section {
    padding: 0 180px;
    height: 619px;
    @include flex-center;
  }
}
</style>
