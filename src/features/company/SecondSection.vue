<template>
  <div class="owl-company-second-wrapper">
    <div class="owl-company-second__contents-wrapper">
      <div class="owl-company-second__image-wrapper">
        <v-img
          cover
          class="owl-company-second__image"
          :lazy-src="require(`@/assets/images/company-logo.webp`)"
          :src="require(`@/assets/images/company-logo.webp`)"
        />
      </div>
      <div class="owl-company-second__desc-wrapper" v-html="checkN(desc)" />
      <v-btn class="owl-company-second--company" elevation="0" @click="moveTo">
        트리니티F&B 바로가기
      </v-btn>
    </div>
  </div>
</template>

<script>
import { lineBreak } from "@/utils/helper";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
  },
  computed: {
    checkN() {
      return (str) => lineBreak(str);
    },
  },
  methods: {
    moveTo() {
      window.open("http://trinityfnb.com/", "_blank");
    },
  },
};
</script>

<style lang="scss">
.owl-company-second-wrapper {
  $this: "owl-company-second";
  width: 100%;
  .#{$this}__contents-wrapper {
    @include flex-center;
    flex-direction: column;
    .#{$this}__image-wrapper {
      width: 290px;
      height: auto;
      @include tablet {
        width: 200px;
      }
      .#{$this}__image {
        height: 100%;
        @include cover-background;
      }
    }
    .#{$this}__title-wrapper {
      margin-top: 80px;
      @include set-text(
        400,
        60,
        rgba($color: $color-title, $alpha: 1),
        false,
        ture
      );
      text-align: center;
      @include tablet {
        font-size: 2rem;
        margin-top: 50px;
      }
      .stressed {
        @include set-text(
          400,
          60,
          rgba($color: $color-accent, $alpha: 1),
          false,
          ture
        );
        @include tablet {
          font-size: 2rem;
        }
      }
    }
    .#{$this}__desc-wrapper {
      margin-top: 80px;
      line-height: 2;
      @include set-text(400, 25, rgba($color: $color-desc, $alpha: 1));
      text-align: center;
      @include tablet {
        font-size: 1rem;
      }
    }
  }
  .#{$this}--company {
    margin-top: 80px;
    height: 70px !important;
    width: 300px;
    background-color: #22393d !important;
    color: #fff !important;
    @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
    @include tablet {
      @include set-text(400, 15, rgba($color: $color-desc, $alpha: 1));
      width: 200px;
      height: 50px !important;
    }
  }
}
</style>
