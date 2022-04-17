<template>
  <div class="owl-franchise-second-wrapper">
    <div class="owl-franchise-second__title-wrapper" v-html="checkN(title)" />
    <v-img
      cover
      width="100%"
      class="owl-franchise-second__image"
      :lazy-src="require(`@/assets/images/franchise-second1.png`)"
      :src="require(`@/assets/images/franchise-second1.png`)"
    />
    <div class="owl-franchise-second__desc-wrapper">
      <div class="owl-franchise-second__sub" v-html="checkN(subTitle)" />
      <div class="owl-franchise-second__desc" v-html="checkN(desc)" />
    </div>
  </div>
</template>

<script>
import contents from "@/constants/franchise/second.json";
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
      subTitle: contents.subTitle,
      desc: contents.desc,
    };
  },
};
</script>

<style lang="scss">
.owl-franchise-second-wrapper {
  $this: "owl-franchise-second";
  width: 100%;
  @include flex-center-column;
  .#{$this}__title-wrapper {
    //padding-top: 80px;
    padding-bottom: 178px;
    @include desktop-medium {
      padding-bottom: 50px;
    }
    @include set-text(400, 70, rgba($color: $color-title, $alpha: 1));
    text-align: center;
  }
  .#{$this}__image {
    height: 100%;
    @include cover-background;
  }

  .#{$this}__desc-wrapper {
    min-width: 900px;
    padding-top: 122px;
    @include desktop-medium {
      padding-top: 50px;
    }
    .#{$this}__sub {
      @include set-text(bold, 40, rgba($color: $color-title, $alpha: 1));
      text-align: center;
      display: flex;
      flex-basis: 100%;
      align-items: center;
      &:after {
        content: "";
        flex-grow: 1;
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        background-color: rgba($color: $scroll-border-color, $alpha: 1);
        margin-left: 50px;
      }
      &:before {
        content: "";
        flex-grow: 1;
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        background-color: rgba($color: $scroll-border-color, $alpha: 1);
        margin-right: 50px;
      }
    }
    .#{$this}__desc {
      //padding-top: 68px;
      @include set-text(400, 30, rgba($color: $color-title, $alpha: 1));
      text-align: center;
    }
  }
}
</style>
