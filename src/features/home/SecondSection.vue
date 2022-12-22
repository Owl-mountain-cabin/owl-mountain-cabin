<template>
  <div class="owl-home-second-wrapper">
    <div class="owl-home-second__image-wrapper">
      <v-img
        class="owl-home-second__background"
        cover
        lazy-src="https://res.cloudinary.com/dexj7izei/image/upload/q_auto/v1671708932/home-second-background_gdhbju.png"
        src="https://res.cloudinary.com/dexj7izei/image/upload/q_auto/v1671708932/home-second-background_gdhbju.png"
      />
      <v-img
        class="owl-home-second__image-owl"
        contain
        lazy-src="https://res.cloudinary.com/dexj7izei/image/upload/q_auto/v1671708932/home-second-owl_s8ayfq.svg"
        src="https://res.cloudinary.com/dexj7izei/image/upload/q_auto/v1671708932/home-second-owl_s8ayfq.svg"
      />
      <v-img
        class="owl-home-second__image-title"
        contain
        lazy-src="https://res.cloudinary.com/dexj7izei/image/upload/q_auto/v1671708932/home-second-title_j5q8qg.svg"
        src="https://res.cloudinary.com/dexj7izei/image/upload/q_auto/v1671708932/home-second-title_j5q8qg.svg"
      />
    </div>
    <div class="owl-home-second__contents-wrapper">
      <div class="owl-home-second__title-wrapper">{{ title }}</div>
      <div class="owl-home-second__desc-wrapper" v-html="checkN(desc1)" />
      <div class="owl-home-second__desc-wrapper" v-html="checkN(desc2)" />
    </div>
  </div>
</template>

<script>
import contents from "@/constants/home/second.json";
import { lineBreak } from "@/utils/helper";
export default {
  computed: {
    checkN() {
      return (str) => lineBreak(str);
    },
  },
  data() {
    return {
      title: contents.title,
      desc1: contents.desc1,
      desc2: contents.desc2,
    };
  },
};
</script>

<style lang="scss">
.owl-home-second-wrapper {
  $this: "owl-home-second";
  height: 100%;
  display: flex;
  align-items: center;
  @include tablet {
    flex-direction: column;
    padding: 65px 20px 50px 20px;
  }
  .#{$this}__image-wrapper {
    width: 40%;
    height: 80%;
    background: #f7f4ee;
    padding: 33px;
    padding-top: 0;
    position: relative;
    @include tablet {
      padding: 0 20px;
      width: 90%;
    }
    .#{$this}__background {
      width: 100%;
      height: 100%;
      @include cover-background;
    }
    .#{$this}__image-owl {
      @include cover-background;
      position: absolute;
      top: 15%;
      width: 400px;
      left: 50%;
      transform: translate(-50%, 0);
      @include tablet {
        width: 60%;
      }
    }
    .#{$this}__image-title {
      @include cover-background;
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, 0);
      @include tablet {
        width: 60%;
      }
    }
  }

  .#{$this}__contents-wrapper {
    width: 60%;
    height: 80%;
    display: flex;
    flex-direction: column;
    margin-left: 228px;
    max-width: 652px;
    justify-content: center;
    @include desktop-small {
      margin-left: 100px;
    }
    @include tablet {
      width: 100%;
      margin: 40px 0 0 0;
    }
    .#{$this}__title-wrapper {
      padding-bottom: 14px;
      @include set-text(
        400,
        65,
        rgba($color: $color-title, $alpha: 1),
        false,
        true
      );
      border-bottom: 1px solid rgba($color: $color-border, $alpha: 1);
      @include desktop-small {
        font-size: 3rem;
      }
      @include tablet {
        padding-bottom: 0;
        @include set-text(
          400,
          23,
          rgba($color: $color-title, $alpha: 1),
          false,
          true
        );
      }
    }
    .#{$this}__desc-wrapper {
      margin-top: 43px;
      @include set-text(400, 18, rgba($color: $color-desc, $alpha: 1));
      justify-self: flex-start;
      line-height: 1.7;
      @include tablet {
        @include set-text(400, 14, rgba($color: $color-desc, $alpha: 1));
        margin-top: 14px;
      }
      br {
        @include desktop-small {
          display: none;
        }
        @include tablet {
          display: none;
        }
      }
    }
  }
}
</style>
