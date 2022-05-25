<template>
  <div class="owl-store-third-wrapper">
    <swiper :images="images" :swiperOptions="swiperOptions" />
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
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 1,
        breakpoints: {
          412: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
.owl-store-third-wrapper {
  $this: "owl-store-third";
  width: 100%;
  @include mobile {
    overflow: hidden;
    padding: 0;
  }
  .swiper-wrapper {
    left: -150px;
    @include mobile {
      left: 0;
    }
  }
  .swiper-container {
    overflow: visible;
  }
  .swiper-slide {
    opacity: 0.5;
    transform: scale(0.9);
    @include tablet {
      opacity: 1;
      transform: scale(0.8);
    }
  }
  .swiper-slide-active {
    opacity: 1;
    transform: scale(1.1);
    margin: 0 150px;
    @include mobile {
      margin: 0;
      transform: scale(0.8);
      width: 100%;
      min-height: 200px;
    }
  }
  .swiper-button-prev {
    background: url("@/assets/images/owl-store-slide-btn-prev.svg") no-repeat;
    background-size: 100% auto;
    background-position: center;
    margin-left: 0;
    left: calc(30% - 40px);
    @include mobile {
      left: 0;
      background-size: 50% auto;
    }
  }
  .swiper-button-next {
    background: url("@/assets/images/owl-store-slide-btn-next.svg") no-repeat;
    background-size: 100% auto;
    background-position: center;
    margin-right: 0;
    right: calc(30% - 40px);
    @include mobile {
      right: 0;
      background-size: 50% auto;
    }
  }
  .swiper-pagination-bullets {
    bottom: -70px;
    @include desktop-small {
      bottom: -80px;
    }
    @include tablet {
      bottom: 0;
    }
  }
  .swiper-pagination-bullet {
    border-color: #444 !important;
  }
  .swiper-pagination-bullet-active {
    background-color: #444 !important;
  }
}
</style>
