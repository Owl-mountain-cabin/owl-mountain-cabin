<template>
  <div class="owl-store">
    <div class="owl-store__first-section">
      <Dimmed :height="'463px'" />
      <ImageWrapper :imageSrc="'store-header-image.png'" title="STORE" />
    </div>
    <div class="owl-store__section owl-store__second-section">
      <SecondSection />
    </div>
    <!-- <div class="owl-store__section owl-store__third-section"></div> -->
    <!-- <div class="owl-store__forth-section"></div> -->
  </div>
</template>

<script>
import Dimmed from "@/components/Dimmed.vue";
import ImageWrapper from "@/components/ImageWrappers.vue";
import SecondSection from "@/features/store/SecondSection.vue";
export default {
  components: {
    Dimmed,
    ImageWrapper,
    SecondSection,
  },
};
</script>

<style lang="scss">
.owl-store {
  $this: "owl-store";
  .#{$this}__section {
    height: 100vh;
  }
  .#{$this}__first-section {
  }
  .#{$this}__second-section {
    padding: 159px 233px 0 329px;
  }
  .#{$this}__third-section {
  }
  .#{$this}__forth-section {
  }
}
</style>
