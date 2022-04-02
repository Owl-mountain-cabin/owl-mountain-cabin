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
    <div class="owl-home-third__swiper-wrapper">
      <swiper :images="images" />
    </div>
    <div class="owl-home-third__summury-wrapper">
      <div
        class="owl-home-third__summury-title-wrapper"
        v-for="(item, index) in summaries"
        :key="index"
      >
        <div class="owl-home-third__summury-title">{{ item.title }}</div>
        <div class="owl-home-third__summury-desc-wrapper">
          {{ item.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { title, desc1, desc2, summaries } from "@/constants/home/third.json";
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
      summaries,
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
      padding: 0;
      padding-bottom: 10px;
      @include set-text(500, 60, rgba($color: $color-title, $alpha: 1));
    }
    .#{$this}__desc-wrapper {
      @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
      padding-bottom: 43px;
    }
  }
  .#{$this}__swiper-wrapper {
  }

  .#{$this}__summury-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 35px;
    .#{$this}__summury-title-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      @include set-text(400, 40, rgba($color: $color-title, $alpha: 1));
      .#{$this}__summury-desc-wrapper {
        @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
      }
    }
  }
}
</style>
