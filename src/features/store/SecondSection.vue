<template>
  <div class="owl-store-second-wrapper">
    <div class="owl-store-second__image-wrapper">
      <v-img
        class="owl-store-second__image"
        contain
        :lazy-src="require(`@/assets/images/store-second1.png`)"
        :src="require(`@/assets/images/store-second1.png`)"
      />
    </div>
    <div class="owl-store-second__contents-wrapper">
      <div class="owl-store-second__title-wrapper" v-html="checkN(title)" />
      <div class="owl-store-second__desc-wrapper" v-html="checkN(desc)" />
      <div class="owl-store-second__address-wrapper" v-html="checkN(address)" />
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
      description: "title",
    },
    desc: {
      type: String,
      default: "",
      description: "desc",
    },
    address: {
      type: String,
      default: "",
      description: "address",
    },
  },
  computed: {
    checkN() {
      return (str) => lineBreak(str);
    },
  },
};
</script>

<style lang="scss">
.owl-store-second-wrapper {
  $this: "owl-store-second";
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .#{$this}__image-wrapper {
    width: 50%;
    height: 100%;
    .#{$this}__image {
      height: 100%;
      @include cover-background;
    }
  }

  .#{$this}__contents-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 84px;
    justify-content: center;
    .#{$this}__title-wrapper {
      padding-bottom: 40px;
      @include set-text(400, 40, rgba($color: $color-title, $alpha: 1));
    }
    .#{$this}__desc-wrapper {
      @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
    }
    .#{$this}__address-wrapper {
      padding-top: 81px;
      @include set-text(400, 20, rgba($color: $color-title, $alpha: 1));
    }
  }
}
</style>
