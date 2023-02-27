<template>
  <div class="owl-company-second-wrapper">
    <div class="owl-company-second__contents-wrapper">
      <div class="owl-company-second__image-wrapper">
        <v-img
          cover
          class="owl-company-second__image"
          :lazy-src="require(`@/assets/images/company-first.svg`)"
          :src="require(`@/assets/images/company-first.svg`)"
        />
      </div>
      <div class="owl-company-second__about-wrapper">
        <div class="owl-company-second__title-wrapper" v-html="checkN(title)" />
        <div class="owl-company-second__desc-wrapper" v-html="checkN(desc)" />
      </div>
    </div>
  </div>
</template>

<script>
import contents from "@/constants/company/second.json";
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
      desc: contents.desc,
    };
  },
};
</script>

<style lang="scss">
.owl-company-second-wrapper {
  $this: "owl-company-second";
  width: 100%;
  .#{$this}__contents-wrapper {
    @include flex-center;
    justify-content: space-between;
    .#{$this}__image-wrapper {
      width: 700px;
      height: auto;
      @include tablet {
        width: 200px;
      }
      .#{$this}__image {
        height: 100%;
        @include cover-background;
      }
    }
    .#{$this}__about-wrapper {
      border: 1px solid rgba($color: $color-black, $alpha: 1);
      padding: 50px 30px;
      padding-right: 100px;
      .#{$this}__title-wrapper {
        @include set-text(400, 40, rgba($color: $color-title, $alpha: 1));
        @include tablet {
          font-size: 2rem;
          margin-top: 50px;
        }
      }
      .#{$this}__desc-wrapper {
        padding-top: 25px;
        border-top: 1px solid rgba($color: $color-black, $alpha: 1);
        @include set-text(400, 14, rgba($color: $color-desc, $alpha: 1));
        @include tablet {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
