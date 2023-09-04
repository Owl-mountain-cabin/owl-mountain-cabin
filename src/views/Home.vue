<template>
  <div class="owl-home">
    <div class="owl-home__section owl-home__first-section">
      <!-- <Dimmed v-if="isMobile" height="100vh" /> -->
      <FirstSection :isMobile="isMobile" />
    </div>
    <div class="owl-home__second-section">
      <SecondSection />
    </div>
    <div class="owl-home__third-section">
      <ThirdSection />
    </div>
    <div class="owl-home__forth-section">
      <ForthSection />
    </div>
    <div class="owl-home__fifth-section">
      <FifthSection />
    </div>
    <div class="owl-home__sixth-section">
      <SixthSection />
    </div>
    <div class="owl-home__seven-section">
      <SevenSection />
    </div>
    <Banner :title="title" :desc="desc" />
  </div>
</template>

<script>
// import Dimmed from "@/components/Dimmed.vue";
import FirstSection from "@/features/home/FirstSections.vue";
import SecondSection from "@/features/home/SecondSection.vue";
import ThirdSection from "@/features/home/ThirdSection.vue";
import ForthSection from "@/features/home/ForthSection.vue";
import FifthSection from "@/features/home/FifthSection.vue";
import SixthSection from "@/features/home/SixthSection.vue";
import SevenSection from "@/features/home/SevenSection.vue";
import Banner from "@/components/Banner.vue";
import contents from "@/constants/common/index.json";
import { homeMeta } from "@/utils/meta/home";

export default {
  name: "Home",
  metaInfo: homeMeta,
  components: {
    // Dimmed,
    FirstSection,
    SecondSection,
    ThirdSection,
    ForthSection,
    FifthSection,
    SixthSection,
    SevenSection,
    Banner,
  },
  mounted() {
    window.scrollTo(0, 0);
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },
  unmounted() {
    window.removeEventListener("resize", this.checkMobile);
  },
  data() {
    return {
      title: contents.bannerTitle,
      desc: contents.phone,
      isMobile: false,
    };
  },
  methods: {
    checkMobile() {
      if (window.outerWidth < 767) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
};
</script>

<style lang="scss">
.owl-home {
  $this: "owl-home";
  .#{$this}__section {
    height: 100vh;
  }
  .#{$this}__first-section {
    // position: absolute;
  }
  .#{$this}__second-section {
    padding: 0 172px;
    padding-bottom: 128px;
    @include desktop-small {
      padding: 0 120px;
      padding-bottom: 100px;
    }
    @include mobile {
      padding: 0;
    }
  }
  .#{$this}__third-section {
    padding-top: 53px;
    padding-bottom: 80px;
    background: rgba($color: #faf9f7, $alpha: 0.7);
    @include mobile {
      padding-top: 0;
    }
  }
  .#{$this}__forth-section {
  }
  .#{$this}__fifth-section {
    padding: 79px 254px 79px 254px;
    margin-bottom: 200px;
    @include mobile {
      padding: 53px 20px;
      margin-bottom: 0;
    }
  }
  .#{$this}__sixth-section {
    padding: 166px 140px 165px 140px;
    background: rgba($color: #f5f4ef, $alpha: 0.5);
    @include mobile {
      padding: 0 20px 80px 20px;
      background: rgba($color: #fff, $alpha: 1);
    }
  }
  .#{$this}__seven-section {
    padding-top: 82px;
    padding-bottom: 91px;
    @include mobile {
      display: none;
    }
  }
}
</style>
