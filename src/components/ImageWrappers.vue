<template>
  <div class="owl-about-image-wrapper">
    <div class="owl-about-image__background-wrapper">
      <v-img
        class="owl-about-image__backgrond"
        contain
        :lazy-src="`https://res.cloudinary.com/${imageSrc}`"
        :src="`https://res.cloudinary.com/${imageSrc}`"
      />
    </div>
    <div class="owl-center-wrapper">
      <div class="owl-about-image__contents-wrapper">
        <div class="owl-about-image__title-wrapper">
          <v-img
            class="owl-about-image__title"
            contain
            lazy-src="https://res.cloudinary.com/dexj7izei/image/upload/q_auto/v1671708925/about-title_twj4y6.svg"
            src="https://res.cloudinary.com/dexj7izei/image/upload/q_auto/v1671708925/about-title_twj4y6.svg"
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
  @include tablet {
    height: 400px;
  }
  .#{$this}__background-wrapper {
    @include tablet {
      height: 400px;
    }
    .v-image {
      @include tablet {
        height: 400px;
      }
      .v-image__image {
        @include tablet {
          background-size: cover;
        }
      }
    }
    .#{$this}__background {
      @include cover-background;
      @include tablet {
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
      width: auto;
      bottom: 40px;
      left: 0;
      padding: 0 40px;
    }
    @include tablet {
      width: 100%;
      bottom: 50px;
      left: 20px;
    }
    .#{$this}__title-wrapper {
      width: 271px;
      @include desktop-small {
        width: 200px;
      }
      @include tablet {
        width: 140px;
      }
    }
    .#{$this}__desc {
      @include set-text(300, 80, rgba($color: $color-white, $alpha: 1));
      font-family: $menu-font-family;
      margin-top: 32px;
      @include desktop-small {
        margin-top: 10px;
        font-size: 4rem;
      }
      @include tablet {
        width: 100%;
        font-size: 2.4rem;
        margin: 0;
      }
    }
  }
}
</style>
