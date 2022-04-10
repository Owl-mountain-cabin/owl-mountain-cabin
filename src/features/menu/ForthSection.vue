<template>
  <div class="owl-menu-forth-wrapper">
    <div class="owl-menu-forth__contents-wrapper">
      <div class="owl-menu-forth__title-wrapper" v-html="checkN(title)" />
      <div
        class="owl-menu-forth__sub-title-wrapper"
        v-html="checkN(subTitle)"
      />
      <div class="owl-menu-forth__desc-wrapper" v-html="checkN(desc)" />
    </div>
    <div class="owl-menu-forth__image-wrapper">
      <div
        class="owl-menu-forth__image-box"
        v-for="(src, index) in images"
        :key="index"
      >
        <v-img
          class="owl-menu-forth__image"
          cover
          :lazy-src="require(`@/assets/images/${src}`)"
          :src="require(`@/assets/images/${src}`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import contents from "@/constants/menu/forth.json";
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
      title: contents.title,
      subTitle: contents.subTitle,
      desc: contents.desc,
      images: [
        "menu-forth2.png",
        "menu-forth4.png",
        "menu-forth1.png",
        "menu-forth3.png",
      ],
    };
  },
};
</script>

<style lang="scss">
.owl-menu-forth-wrapper {
  $this: "owl-menu-forth";
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
      padding-right: 48px;
      padding-bottom: 48px;
      &:nth-child(2) {
        position: relative;
        top: calc(680px / 4);
        padding-bottom: 0;
      }
      &:nth-child(3) {
        padding-bottom: 0;
      }
      &:last-child {
        align-self: flex-end;
        padding-bottom: 0;
      }
      .#{$this}__image {
        width: 100%;
        height: 100%;
        @include cover-background;
      }
    }
  }
}
</style>
