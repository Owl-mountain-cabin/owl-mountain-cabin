<template>
  <div class="owl-company-third-wrapper">
    <div class="owl-company-third__title-wrapper" v-html="checkN(title)" />
    <div class="owl-company-third__desc-wrapper" v-html="checkN(desc)" />
  </div>
</template>

<script>
import contents from "@/constants/company/third.json";
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
.owl-company-third-wrapper {
  $this: "owl-company-third";
  width: 100%;
  @include flex-center;
  flex-direction: column;
  .#{$this}__title-wrapper {
    text-align: center;
    width: 100%;
    @include set-text(
      400,
      48,
      rgba($color: $color-black, $alpha: 1),
      $color-black
    );
    @include tablet {
      font-size: 2rem;
      margin-top: 50px;
    }
  }
  .#{$this}__desc-wrapper {
    text-align: center;
    width: 100%;
    margin-top: 70px;
    @include set-text(400, 20, rgba($color: $color-black, $alpha: 1));
    @include line-height(20, 24);
    line-height: 2;
    @include tablet {
      font-size: 1rem;
    }
  }
}
</style>
