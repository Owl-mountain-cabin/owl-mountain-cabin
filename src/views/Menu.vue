<template>
  <div class="owl-menu">
    <div class="owl-menu__first-section">
      <Dimmed :height="'100%'" />
      <ImageWrapper
        imageSrc="dexj7izei/image/upload/q_auto/v1671708947/about-header-image_twkqto.png"
        title="MENU"
      />
    </div>
    <div class="owl-menu__second-section">
      <SecondSection />
    </div>
    <div class="owl-menu__third-section">
      <ThirdSection />
    </div>
    <div class="owl-menu__forth-section">
      <ForthSection />
    </div>
    <div class="owl-menu__fifth-section">
      <FifthSection />
    </div>
    <Banner :title="title" :desc="desc" />
  </div>
</template>

<script>
import Dimmed from "@/components/Dimmed.vue";
import ImageWrapper from "@/components/ImageWrappers.vue";
import SecondSection from "@/features/menu/SecondSection.vue";
import ThirdSection from "@/features/menu/ThirdSection.vue";
import ForthSection from "@/features/menu/ForthSection.vue";
import FifthSection from "@/features/menu/FifthSection.vue";
import Banner from "@/components/Banner.vue";
import contents from "@/constants/common/index.json";
import { menuMeta } from "@/utils/meta/menu";

export default {
  name: "Menu",
  metaInfo: menuMeta,
  components: {
    Dimmed,
    ImageWrapper,
    SecondSection,
    ThirdSection,
    ForthSection,
    FifthSection,
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
.v-application--wrap {
  @include tablet {
    overflow: hidden;
  }
}
.owl-menu {
  $this: "owl-menu";
  .#{$this}__first-section {
    position: relative;
  }
  .#{$this}__second-section {
    padding: 184px 0 0 0;
    @include tablet {
      padding: 80px 20px 0 20px;
    }
  }
  .#{$this}__third-section {
    padding: 364px 0 0 0;
    @include tablet {
      padding: 80px 20px 0 20px;
    }
  }
  .#{$this}__forth-section {
    padding: 423px 0 0 0;
    @include tablet {
      padding: 80px 20px 0 20px;
    }
  }
  .#{$this}__fifth-section {
    padding: 171px 0 135px 0;
    @include tablet {
      padding: 80px 0 0 0;
    }
  }
}
</style>
