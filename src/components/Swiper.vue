<template>
  <swiper class="owl-swiper" :class="[width]" :options="swiperOption">
    <swiperSlide
      class="owl-swiper__slide"
      v-for="(src, index) in images"
      :key="index"
    >
      <Dimmed v-if="isDimmed" height="100%" />
      <v-img
        contain
        class="owl-swiper__slide-image"
        :lazy-src="`https://res.cloudinary.com/${src}`"
        :src="`https://res.cloudinary.com/${src}`"
      />
    </swiperSlide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-prev"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Dimmed from "./Dimmed.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    Dimmed,
  },
  props: {
    width: {
      type: String,
      default: "",
      description: "width 여부",
    },
    isDimmed: {
      type: Boolean,
      default: false,
      description: "Dimmed 처리 여부",
    },
    images: {
      type: Array,
      default: () => [],
      description: "Array of objects with image and title properties",
    },
    swiperOptions: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        loopedSlides: 1,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        ...this.swiperOptions,
      },
    };
  },
};
</script>

<style lang="scss">
.owl-swiper {
  $this: "owl-swiper";
  width: 100%;
  &.w-30 {
    width: 30%;
  }
  .#{$this}__slide {
    .#{$this}__slide-image {
      width: 100%;
      @include cover-background;
    }
  }

  .swiper-pagination-bullet {
    background-color: transparent;
    width: 13px;
    height: 13px;
    margin: 0 10px !important;
    border-radius: 50%;
    border: 1px solid $color-white !important;
    opacity: 1;
    @include mobile {
      width: 8px;
      height: 8px;
      margin: 0 5px !important;
    }
  }
  .swiper-pagination-bullet-active {
    background-color: $color-white !important;
  }

  .swiper-button-prev {
    background: url("https://res.cloudinary.com/dexj7izei/image/upload/q_auto/v1671708951/swiper-left_sdlksa.svg")
      no-repeat;
    background-size: 100% auto;
    background-position: center;
    margin-left: 30px;
    @include mobile {
      margin-left: 0;
      background-size: 85% auto;
    }
  }

  .swiper-button-next {
    background: url("https://res.cloudinary.com/dexj7izei/image/upload/q_auto/v1671708953/swiper-right_ihyrz4.svg")
      no-repeat;
    background-size: 100% auto;
    background-position: center;
    margin-right: 30px;
    @include mobile {
      margin-right: 0;
      background-size: 85% auto;
    }
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
}
</style>
