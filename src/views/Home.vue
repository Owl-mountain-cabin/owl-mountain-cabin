<template>
  <div class="owl-home">
    <div class="owl-home__section owl-home__first-section">
      <Dimmed height="100vh" />
      <FirstSection />
    </div>
    <div class="owl-home__section owl-home__second-section">
      <SecondSection />
    </div>
    <div class="owl-home__section owl-home__third-section">
      <ThirdSection />
    </div>
    <div class="owl-home__forth-section">
      <ForthSection />
    </div>
    <div class="owl-home__section owl-home__fifth-section">
      <FifthSection />
    </div>
  </div>
</template>

<script>
import Dimmed from "@/components/Dimmed.vue";
import FirstSection from "@/features/home/FirstSections.vue";
import SecondSection from "@/features/home/SecondSection.vue";
import ThirdSection from "@/features/home/ThirdSection.vue";
import ForthSection from "@/features/home/ForthSection.vue";
import FifthSection from "@/features/home/FifthSection.vue";
export default {
  components: {
    Dimmed,
    FirstSection,
    SecondSection,
    ThirdSection,
    ForthSection,
    FifthSection,
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
  }
  .#{$this}__third-section {
  }
  .#{$this}__forth-section {
    padding-top: 60px;
  }
  .#{$this}__fifth-section {
    padding: 55px 254px 0;
  }
}
</style>
