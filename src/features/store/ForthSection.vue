<template>
  <div class="owl-store-forth-wrapper">
    <div class="owl-store-forth__contents-wrapper">
      <div class="owl-store-forth__title-wrapper" v-html="checkN(title)" />
    </div>
    <div class="owl-store-forth__image-wrapper">
      <v-img
        cover
        class="owl-store-forth__image"
        lazy-src="https://res.cloudinary.com/dexj7izei/image/upload/v1671708947/store-owl_nhmt5b.svg"
        src="https://res.cloudinary.com/dexj7izei/image/upload/v1671708947/store-owl_nhmt5b.svg"
      />
    </div>
  </div>
</template>

<script>
import { lineBreak } from "@/utils/helper";
export default {
  props: {
    title: {
      type: String,
      default: "",
      description: "title",
    },
  },
  computed: {
    checkN() {
      return (str) => lineBreak(str);
    },
  },
};
</script>

<style lang="scss">
.owl-store-forth-wrapper {
  $this: "owl-store-forth";
  position: relative;
  width: 100%;
  .#{$this}__contents-wrapper {
    @include flex-center;
    .#{$this}__title-wrapper {
      @include set-text(400, 40, rgba($color: $color-title, $alpha: 1));
      text-align: center;
      @include tablet {
        font-size: 1.4rem;
      }
    }
  }
  .#{$this}__image-wrapper {
    position: absolute;
    right: 130px;
    top: 70px;
    width: 265px;
    height: auto;
    @include desktop-small {
      position: static;
      margin: 0 auto;
      padding-top: 30px;
    }
    @include tablet {
      position: static;
      margin: 0 auto;
      padding-top: 30px;
      width: 145px;
    }
    .#{$this}__image {
      height: 100%;
      @include cover-background;
    }
  }
}
</style>
