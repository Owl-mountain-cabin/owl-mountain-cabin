<template>
  <div class="owl-store-third-wrapper">
    <swiper :images="images" :swiperOptions="swiperOptions" width="w-30" />
  </div>
</template>

<script>
import Swiper from "@/components/Swiper.vue";

export default {
  components: {
    Swiper,
  },
  data() {
    return {
      images: [
        "store-slide-image1",
        "store-slide-image2",
        "store-slide-image3",
      ],
      swiperOptions: {
        effect: "coverflow",
        autoplay: false,
      },
    };
  },
};
</script>

<style lang="scss">
.owl-store-third-wrapper {
  $this: "owl-store-third";
  width: 100%;
}
</style>
