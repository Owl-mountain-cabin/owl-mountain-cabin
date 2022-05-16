<template>
  <div class="owl-store-forth-wrapper">
    <div class="owl-store-forth__contents-wrapper">
      <div class="owl-store-forth__title-wrapper" v-html="checkN(title)" />
    </div>
    <div class="owl-store-forth__image-wrapper">
      <v-img
        cover
        class="owl-store-forth__image"
        :lazy-src="require(`@/assets/images/store-owl.svg`)"
        :src="require(`@/assets/images/store-owl.svg`)"
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
    }
  }
  .#{$this}__image-wrapper {
    position: absolute;
    right: 130px;
    top: 70px;
    width: 265px;
    height: auto;
    .#{$this}__image {
      height: 100%;
      @include cover-background;
    }
  }
}
</style>
