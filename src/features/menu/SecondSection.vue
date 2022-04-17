<template>
  <div class="owl-menu-second-wrapper">
    <div class="owl-menu-second__contents-wrapper">
      <div class="owl-menu-second__title-wrapper" v-html="checkN(title)" />
      <div class="owl-menu-second__desc-wrapper" v-html="checkN(desc)" />
    </div>
    <div class="owl-menu-second__image-wrapper">
      <div
        class="owl-menu-second__image-box"
        v-for="(src, index) in images"
        :key="index"
      >
        <v-img
          class="owl-menu-second__image"
          cover
          :lazy-src="require(`@/assets/images/${src}`)"
          :src="require(`@/assets/images/${src}`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import contents from "@/constants/menu/second.json";
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
      desc: contents.desc,
      images: ["menu-second1.png", "menu-second3.png", "menu-second2.png"],
    };
  },
};
</script>

<style lang="scss">
.owl-menu-second-wrapper {
  $this: "owl-menu-second";
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
  .#{$this}__contents-wrapper {
    width: 30%;
    display: flex;
    flex-direction: column;
    .#{$this}__title-wrapper {
      @include set-text(400, 33, rgba($color: $color-title, $alpha: 1));
      @include desktop-medium {
        font-size: 1.9rem;
      }
      @include desktop-small {
        font-size: 1.8rem;
      }
    }
    .#{$this}__desc-wrapper {
      margin-top: 63px;
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
      @include desktop-medium {
        width: 45%;
      }
      @include desktop-small {
        width: 45%;
        padding-right: 0;
        padding-left: 28px;
        padding-bottom: 28px;
      }
      &:nth-child(2) {
        position: relative;
        top: calc(680px / 2);
        padding-bottom: 0;
      }
      &:last-child {
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
