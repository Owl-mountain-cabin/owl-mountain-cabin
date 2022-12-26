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
import contents from "@/constants/menu/third.json";
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
      images: ["menu-third2.webp", "menu-third1.webp"],
    };
  },
};
</script>

<style lang="scss">
.owl-menu-third-wrapper {
  $this: "owl-menu-third";
  display: flex;
  width: 1600px;
  margin: 0 auto;
  @include desktop-medium {
    width: 100%;
    padding: 0 40px;
  }
  @include desktop-small {
    width: 100%;
    padding: 0 40px;
  }
  @include tablet {
    width: 100%;
    flex-direction: column;
  }
  .#{$this}__contents-wrapper {
    width: 30%;
    display: flex;
    flex-direction: column;
    @include tablet {
      width: 100%;
    }
    .#{$this}__title-wrapper {
      @include set-text(
        400,
        35,
        rgba($color: $color-title, $alpha: 1),
        false,
        true
      );
      @include tablet {
        font-size: 1.5rem;
      }
    }
    .#{$this}__sub-title-wrapper {
      @include set-text(400, 28, rgba($color: $color-title, $alpha: 1));
      @include desktop-medium {
        font-size: 1.9rem;
      }
      @include desktop-small {
        font-size: 1.8rem;
      }
      @include tablet {
        font-size: 1.2rem;
      }
    }
    .#{$this}__desc-wrapper {
      margin-top: 93px;
      @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
      line-height: 1.7;
      @include desktop-small {
        margin-top: 53px;
        line-height: 1.6;
      }
      @include tablet {
        margin-top: 20px;
        font-size: 0.8rem;
        line-height: 1.5;
        margin-bottom: 50px;
      }
      br {
        @include tablet {
          display: none;
        }
      }
    }
  }
  .#{$this}__image-wrapper {
    width: 70%;
    @include flex-center-vert;
    flex-wrap: wrap;
    @include tablet {
      flex-wrap: nowrap;
      flex-direction: column;
      width: 100%;
      padding: 20px 0 0 0;
      overflow: hidden;
    }
    .#{$this}__image-box {
      padding-right: 58px;
      @include desktop-medium {
        width: 45%;
        height: 100%;
      }
      @include desktop-small {
        width: 45%;
        height: 100%;
        padding-right: 0;
        padding-left: 28px;
        padding-bottom: 28px;
      }
      @include tablet {
        padding: 0;
        width: 100% !important;
        margin: 0 0 20px 0;
        top: 0 !important;
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
