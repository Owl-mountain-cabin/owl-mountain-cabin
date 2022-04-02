<template>
  <div class="owl-home-third-wrapper">
    <div class="owl-home-third__contents-wrapper">
      <div class="owl-home-third__title-wrapper">{{ title }}</div>
      <div class="owl-home-third__desc-wrapper">
        {{ desc1 }}
        <br />
        {{ desc2 }}
      </div>
    </div>
    <swiper :images="images" />
  </div>
</template>

<script>
import { title, desc1, desc2 } from "@/constants/home/third.json";
import Swiper from "@/components/Swiper.vue";

export default {
  components: {
    Swiper,
  },
  data() {
    return {
      title,
      desc1,
      desc2,
      images: [
        "home-slide-image1",
        "home-slide-image2",
        "home-slide-image3",
        "home-slide-image4",
        "home-slide-image5",
      ],
    };
  },
};
</script>

<style lang="scss">
.owl-home-third-wrapper {
  $this: "owl-home-third";
  height: 100%;
  .#{$this}__contents-wrapper {
    padding: 0 140px;
    .#{$this}__title-wrapper {
      padding-bottom: 14px;
      @include set-text(500, 60, rgba($color: $color-title, $alpha: 1));
    }
    .#{$this}__desc-wrapper {
      @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
      line-height: 1.7;
      padding-bottom: 43px;
    }
  }
}
</style>
