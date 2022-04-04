<template>
  <div class="owl-home-forth-wrapper">
    <div
      class="owl-home-forth__contents-wrapper"
      v-for="(item, index) in foods"
      :key="index"
      :class="index === 1 ? 'reverse' : ''"
    >
      <div class="owl-home-forth__image-wrapper">
        <v-img
          class="owl-home-forth__iamge"
          cover
          :lazy-src="require(`@/assets/images/${item.src}.png`)"
          :src="require(`@/assets/images/${item.src}.png`)"
        />
      </div>
      <div class="owl-home-forth__title-wrapper">
        <div class="owl-home-forth__title">{{ item.title }}</div>
        <div class="owl-home-forth__sub-title">{{ item.subTitle }}</div>
        <div class="owl-home-forth__desc" v-html="checkN(item.desc)" />
      </div>
    </div>
  </div>
</template>

<script>
import { foods } from "@/constants/home/forth.json";
import { lineBreak } from "@/utils/helper";

export default {
  computed: {
    checkN() {
      return (str) => lineBreak(str);
    },
  },
  data() {
    return {
      foods,
    };
  },
};
</script>

<style lang="scss">
.owl-home-forth-wrapper {
  $this: "owl-home-forth";
  .#{$this}__contents-wrapper {
    display: flex;
    align-items: center;
    &.reverse {
      flex-direction: row-reverse;
    }

    .#{$this}__image-wrapper {
      width: 50%;
      height: 100%;
      @include cover-background;
    }
    .#{$this}__title-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      align-items: center;
      .#{$this}__title {
        @include set-text(
          400,
          60,
          rgba($color: $color-title, $alpha: 1),
          false,
          true
        );
      }
      .#{$this}__sub-title {
        margin-bottom: 43px;
        @include set-text(400, 25, rgba($color: $color-title, $alpha: 1));
      }
      .#{$this}__desc {
        line-height: 1.7;
        @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
      }
    }
  }
}
</style>
