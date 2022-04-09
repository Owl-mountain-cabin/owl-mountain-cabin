<template>
  <div class="owl-about-image-wrapper">
    <div class="owl-about-image__backgrond-wrapper">
      <v-img
        class="owl-about-image__backgrond"
        contain
        :lazy-src="require(`@/assets/images/${imageSrc}`)"
        :src="require(`@/assets/images/${imageSrc}`)"
      />
    </div>
    <div class="owl-about-image__contents-wrapper">
      <div class="owl-about-image__title-wrapper">
        <v-img
          class="owl-about-image__title"
          contain
          :lazy-src="require(`@/assets/images/about-title.svg`)"
          :src="require(`@/assets/images/about-title.svg`)"
        />
      </div>
      <div class="owl-about-image__desc">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: "",
      description: "image src",
    },
    title: {
      type: String,
      default: "",
      description: "title",
    },
  },
};
</script>

<style lang="scss">
.owl-about-image-wrapper {
  $this: "owl-about-image";
  position: relative;
  .#{$this}__background-wrapper {
    .#{$this}__background {
      @include cover-background;
    }
  }

  .#{$this}__contents-wrapper {
    position: absolute;
    width: calc(100% - 274px - 274px);
    top: 170px;
    left: 140px;
    z-index: 501;
    @include desktop-medium {
      top: 140px;
    }
    .#{$this}__title-wrapper {
      width: 271px;
    }
    .#{$this}__desc {
      @include set-text(300, 80, rgba($color: $color-white, $alpha: 1));
      font-family: $menu-font-family;
      margin-top: 32px;
    }
  }
}
</style>
