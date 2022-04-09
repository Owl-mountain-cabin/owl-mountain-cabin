<template>
  <div class="owl-menu">
    <div class="owl-menu__first-section">
      <Dimmed :height="'463px'" />
      <ImageWrapper :imageSrc="'about-header-image.png'" title="MENU" />
    </div>
    <div class="owl-menu__second-section">
      <SecondSection />
    </div>
    <div class="owl-menu__third-section">
      <ThirdSection />
    </div>
  </div>
</template>

<script>
import Dimmed from "@/components/Dimmed.vue";
import ImageWrapper from "@/components/ImageWrappers.vue";
import SecondSection from "@/features/menu/SecondSection.vue";
import ThirdSection from "@/features/menu/ThirdSection.vue";
export default {
  components: {
    Dimmed,
    ImageWrapper,
    SecondSection,
    ThirdSection,
  },
};
</script>

<style lang="scss">
.owl-menu {
  $this: "owl-menu";
  .#{$this}__first-section {
  }
  .#{$this}__second-section {
    padding: 184px 140px;
  }
  .#{$this}__third-section {
    padding: 364px 140px;
  }
}
</style>
