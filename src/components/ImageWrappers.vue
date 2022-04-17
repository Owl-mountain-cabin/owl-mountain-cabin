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
    <div class="owl-center-wrapper">
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
    width: 1350px;
    left: auto;
    z-index: 501;
    @include desktop-medium {
      top: auto;
      bottom: 50px;
    }
    @include desktop-small {
      width: 100%;
      bottom: 20px;
      left: 0;
      padding: 0 40px;
    }
    .#{$this}__title-wrapper {
      width: 271px;
    }
    .#{$this}__desc {
      @include set-text(300, 80, rgba($color: $color-white, $alpha: 1));
      font-family: $menu-font-family;
      margin-top: 32px;
      @include desktop-small {
        margin-top: 10px;
        font-size: 4.3rem;
      }
    }
  }
}
</style>
