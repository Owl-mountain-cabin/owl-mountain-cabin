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
      <div class="owl-home-second__desc-wrapper">
        {{ desc1 }}
        <br />
        {{ desc2 }}
        <br />
        {{ desc3 }}
        <br />
        {{ desc4 }}
        <br />
        {{ desc5 }}
        <br />
        <br />
        {{ desc6 }}
      </div>
    </div>
  </div>
</template>

<script>
import {
  title,
  desc1,
  desc2,
  desc3,
  desc4,
  desc5,
  desc6,
} from "@/constants/home/second.json";

export default {
  data() {
    return {
      title,
      desc1,
      desc2,
      desc3,
      desc4,
      desc5,
      desc6,
    };
  },
};
</script>

<style lang="scss">
.owl-home-second-wrapper {
  $this: "owl-home-second";
  height: 100%;
  display: flex;
  .#{$this}__image-wrapper {
    width: 31%;
    height: 80%;
    position: relative;
    .#{$this}__background {
      width: 100%;
      height: 100%;
      @include cover-background;
    }
    .#{$this}__image-owl {
      @include cover-background;
      position: absolute;
      width: 100%;
      top: 20%;
      padding: 0 50px;
    }
    .#{$this}__image-title {
      @include cover-background;
      position: absolute;
      width: 100%;
      top: 75%;
      padding: 0 80px;
    }
  }

  .#{$this}__contents-wrapper {
    width: 69%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .#{$this}__title-wrapper {
      width: 652px;
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
      width: 652px;
      margin-top: 43px;
      @include set-text(400, 18, rgba($color: $color-desc, $alpha: 1));
      justify-self: flex-start;
      line-height: 1.7;
    }
  }
}
</style>
