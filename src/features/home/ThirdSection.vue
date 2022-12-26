<template>
  <div class="owl-home-third-wrapper">
    <div class="owl-home-third__contents-wrapper">
      <div class="owl-home-third__title-wrapper">{{ title }}</div>
      <div class="owl-home-third__desc-wrapper" v-html="checkN(desc)" />
    </div>
    <div class="owl-home-third__swiper-wrapper">
      <swiper isDimmed :images="images" />
    </div>
    <div class="owl-home-third__summury-wrapper">
      <div
        class="owl-home-third__summury-title-wrapper"
        v-for="(item, index) in summaries"
        :key="index"
      >
        <div class="owl-home-third__summury-title">{{ item.title }}</div>
        <div class="owl-home-third__summury-desc-wrapper">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import contents from "@/constants/home/third.json";
import Swiper from "@/components/Swiper.vue";
import { lineBreak } from "@/utils/helper";

export default {
  components: {
    Swiper,
  },
  computed: {
    checkN() {
      return (str) => lineBreak(str);
    },
  },
  data() {
    return {
      title: contents.title,
      desc: contents.desc,
      summaries: contents.summaries,
      images: [
        "home-slide-image1.webp",
        "home-slide-image2.webp",
        "home-slide-image3.webp",
        "home-slide-image4.webp",
        "home-slide-image5.webp",
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
    @include tablet {
      padding: 53px 20px 0 20px;
      background: rgba(237, 237, 229, 0.5);
    }
    .#{$this}__title-wrapper {
      padding: 0;
      padding-bottom: 10px;
      @include set-text(500, 60, rgba($color: $color-title, $alpha: 1));
      @include tablet {
        text-align: center;
        @include set-text(600, 23, rgba($color: $color-title, $alpha: 1));
      }
    }
    .#{$this}__desc-wrapper {
      @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
      padding-bottom: 43px;
      @include tablet {
        text-align: center;
        @include set-text(400, 16, rgba($color: $color-desc, $alpha: 1));
      }
      br {
        @include tablet {
          display: none;
        }
      }
    }
  }
  .#{$this}__swiper-wrapper {
    @include tablet {
      padding: 0 20px 53px;
      background-color: rgba(237, 237, 229, 0.5);
    }
    .swiper-slide {
      @include tablet {
        height: 200px;
      }
      .v-image {
        @include tablet {
          height: 200px;
        }
        .v-image__image {
          @include tablet {
            height: 200px;
            background-size: cover;
          }
        }
      }
    }
  }

  .#{$this}__summury-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 64px;
    @include tablet {
      margin-top: 80px;
    }
    .#{$this}__summury-title-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      @include set-text(400, 40, rgba($color: $color-title, $alpha: 1));
      @include tablet {
        width: 33.33%;
        @include set-text(400, 16, rgba($color: $color-title, $alpha: 1));
      }
      .#{$this}__summury-desc-wrapper {
        @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
        @include tablet {
          @include set-text(400, 9, rgba($color: $color-desc, $alpha: 1));
        }
      }
    }
  }
}
</style>
