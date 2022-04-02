<template>
  <div class="owl-home">
    <div class="owl-home__section owl-home__first-section">
      <Dimmed height="100vh" />
      <FirstSection />
    </div>
    <div class="owl-home__section owl-home__second-section">
      <SecondSection />
    </div>
  </div>
</template>

<script>
import Dimmed from "@/components/Dimmed.vue";
import FirstSection from "@/features/home/FirstSection.vue";
import SecondSection from "@/features/home/SecondSection.vue";
export default {
  components: {
    Dimmed,
    FirstSection,
    SecondSection,
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
}
</style>
