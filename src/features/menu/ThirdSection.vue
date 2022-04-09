<template>
  <div class="owl-menu-third-wrapper">
    <div class="owl-menu-third__contents-wrapper">
      <div class="owl-menu-third__title-wrapper" v-html="checkN(title)" />
      <div
        class="owl-menu-third__sub-title-wrapper"
        v-html="checkN(subTitle)"
      />
      <div class="owl-menu-third__desc-wrapper" v-html="checkN(desc)" />
    </div>
    <div class="owl-menu-third__image-wrapper">
      <div
        class="owl-menu-third__image-box"
        v-for="(src, index) in images"
        :key="index"
      >
        <v-img
          class="owl-menu-third__image"
          cover
          :lazy-src="require(`@/assets/images/${src}`)"
          :src="require(`@/assets/images/${src}`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { title, subTitle, desc } from "@/constants/menu/third.json";
import { lineBreak } from "@/utils/helper";

export default {
  components: {},
  computed: {
    checkN() {
      return (str) => lineBreak(str);
    },
  },
  data() {
    return {
      title,
      subTitle,
      desc,
      images: ["menu-third2.png", "menu-third1.png"],
    };
  },
};
</script>

<style lang="scss">
.owl-menu-third-wrapper {
  $this: "owl-menu-third";
  display: flex;
  .#{$this}__contents-wrapper {
    width: 30%;
    display: flex;
    flex-direction: column;
    .#{$this}__title-wrapper {
      @include set-text(
        400,
        35,
        rgba($color: $color-title, $alpha: 1),
        false,
        true
      );
    }
    .#{$this}__sub-title-wrapper {
      @include set-text(400, 28, rgba($color: $color-title, $alpha: 1));
    }
    .#{$this}__desc-wrapper {
      margin-top: 93px;
      @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
      line-height: 1.7;
    }
  }
  .#{$this}__image-wrapper {
    width: 70%;
    @include flex-center-vert;
    flex-wrap: wrap;
    .#{$this}__image-box {
      padding-right: 58px;
      .#{$this}__image {
        width: 100%;
        height: 100%;
        @include cover-background;
      }
    }
  }
}
</style>
