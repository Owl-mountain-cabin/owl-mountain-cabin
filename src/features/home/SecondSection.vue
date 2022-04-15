<template>
  <div class="owl-home-second-wrapper">
    <div class="owl-home-second__image-wrapper">
      <v-img
        class="owl-home-second__background"
        cover
        :lazy-src="require(`@/assets/images/home-second-background.png`)"
        :src="require(`@/assets/images/home-second-background.png`)"
      />
      <v-img
        class="owl-home-second__image-owl"
        contain
        :lazy-src="require(`@/assets/images/home-second-owl.svg`)"
        :src="require(`@/assets/images/home-second-owl.svg`)"
      />
      <v-img
        class="owl-home-second__image-title"
        contain
        :lazy-src="require(`@/assets/images/home-second-title.svg`)"
        :src="require(`@/assets/images/home-second-title.svg`)"
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
  .#{$this}__image-wrapper {
    width: 40%;
    height: 80%;
    background: #f7f4ee;
    padding: 33px;
    padding-top: 0;
    position: relative;
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
    }
    .#{$this}__image-title {
      @include cover-background;
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, 0);
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
    }
    .#{$this}__desc-wrapper {
      margin-top: 43px;
      @include set-text(400, 18, rgba($color: $color-desc, $alpha: 1));
      justify-self: flex-start;
      line-height: 1.7;
    }
  }
}
</style>
