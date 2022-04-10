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
        :lazy-src="require(`@/assets/images/${src}.png`)"
        :src="require(`@/assets/images/${src}.png`)"
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
        loop: false,
        autoplay: true,
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
  }
  .swiper-pagination-bullet-active {
    background-color: $color-white !important;
  }

  .swiper-button-prev {
    background: url("@/assets/images/swiper-left.svg") no-repeat;
    background-size: 100% auto;
    background-position: center;
    margin-left: 30px;
  }

  .swiper-button-next {
    background: url("@/assets/images/swiper-right.svg") no-repeat;
    background-size: 100% auto;
    background-position: center;
    margin-right: 30px;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
}
</style>
