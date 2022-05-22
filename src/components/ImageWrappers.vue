<template>
  <div class="owl-about-image-wrapper">
    <div class="owl-about-image__background-wrapper">
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
  @include mobile {
    height: 400px;
  }
  .#{$this}__background-wrapper {
    @include mobile {
      height: 400px;
    }
    .v-image {
      @include mobile {
        height: 400px;
      }
      .v-image__image {
        @include mobile {
          background-size: cover;
        }
      }
    }
    .#{$this}__background {
      @include cover-background;
      @include mobile {
        height: 400px;
      }
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
      bottom: 40px;
      left: 0;
      padding: 0 40px;
    }
    @include mobile {
      width: 100%;
      bottom: 50px;
      left: 20px;
    }
    .#{$this}__title-wrapper {
      width: 271px;
      @include mobile {
        width: 140px;
      }
    }
    .#{$this}__desc {
      @include set-text(300, 80, rgba($color: $color-white, $alpha: 1));
      font-family: $menu-font-family;
      margin-top: 32px;
      @include desktop-small {
        margin-top: 10px;
        font-size: 4.3rem;
      }
      @include mobile {
        width: 100%;
        font-size: 2.4rem;
        margin: 0;
      }
    }
  }
}
</style>
