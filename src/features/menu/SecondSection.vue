<template>
  <div class="owl-menu-second-wrapper">
    <div class="owl-menu-second__contents-wrapper">
      <div class="owl-menu-second__title-wrapper" v-html="checkN(title)" />
      <div class="owl-menu-second__desc-wrapper" v-html="checkN(desc)" />
    </div>
    <div class="owl-menu-second__image-wrapper">
      <div
        class="owl-menu-second__image-box"
        v-for="(item, index) in images"
        :class="item.name"
        :key="index"
      >
        <v-img
          class="owl-menu-second__image"
          cover
          :lazy-src="require(`@/assets/images/${item.src}`)"
          :src="require(`@/assets/images/${item.src}`)"
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
      images: [
        { src: "menu-second1.png", name: "second1" },
        { src: "menu-second3.png", name: "second3" },
        { src: "menu-second2.png", name: "second2" },
      ],
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
      @include set-text(400, 33, rgba($color: $color-title, $alpha: 1));
      @include desktop-medium {
        font-size: 1.9rem;
      }
      @include desktop-small {
        font-size: 1.8rem;
      }
      @include tablet {
        font-size: 1.5rem;
      }
    }
    .#{$this}__desc-wrapper {
      margin-top: 63px;
      @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
      line-height: 1.7;
      @include tablet {
        margin: 20px 0;
        font-size: 0.9rem;
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
      padding-right: 48px;
      padding-bottom: 48px;
      position: relative;
      @include tablet {
        padding: 0;
        width: 100%;
        margin: 0 0 20px 0;
        top: 0 !important;
      }
      &.second1 {
        &:hover {
          .#{$this}__image:before {
            height: 100%;
          }
          &:after {
            content: "곱도리탕";
            position: absolute;
            top: 5%;
            right: 15%;
            @include set-text(400, 22, rgba($color: $color-white, $alpha: 1));
          }
        }
      }
      &.second2 {
        &:hover {
          .#{$this}__image:before {
            height: 100%;
          }
          &:after {
            content: "치즈감자채전";
            position: absolute;
            top: 5%;
            right: 15%;
            @include set-text(400, 22, rgba($color: $color-white, $alpha: 1));
          }
        }
      }
      &.second3 {
        &:hover {
          .#{$this}__image:before {
            height: 100%;
          }
          &:after {
            content: "고추장육회";
            position: absolute;
            top: 5%;
            right: 15%;
            @include set-text(400, 22, rgba($color: $color-white, $alpha: 1));
          }
        }
      }

      @include desktop-medium {
        width: 45%;
      }
      @include desktop-small {
        width: 45%;
        padding-right: 0;
        padding-left: 28px;
        padding-bottom: 28px;
      }
      @include tablet {
        width: 100%;
        padding: 0;
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
        &:before {
          content: "";
          display: block;
          position: absolute;
          height: 0%;
          width: 100%;
          top: 0;
          transition: height 0.5s ease-out;
          background: linear-gradient(to top, transparent 5%, black 100%);
        }
      }
    }
  }
}
</style>
