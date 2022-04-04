<template>
  <div class="owl-home-fifth-wrapper">
    <div class="owl-home-fifth__title">{{ title }}</div>
    <div class="owl-home-fifth__contents-wrapper">
      <div
        class="owl-home-fifth__content"
        v-for="(item, index) in data"
        :key="index"
        :class="{ center: index === 1 }"
      >
        <div class="owl-home-fifth__image-wrapper">
          <v-img
            class="owl-home-fifth__image"
            cover
            :lazy-src="require(`@/assets/images/${item.src}.png`)"
            :src="require(`@/assets/images/${item.src}.png`)"
          />
        </div>
        <div class="owl-home-fifth__content-title">{{ item.title }}</div>
        <div
          class="owl-home-fifth__content-desc"
          v-html="checkN(item.desc)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { title, data } from "@/constants/home/fifth.json";
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
      title,
      data,
    };
  },
};
</script>

<style lang="scss">
.owl-home-fifth-wrapper {
  $this: "owl-home-fifth";
  height: 100%;
  .#{$this}__title {
    text-align: center;
    padding-bottom: 55px;
    @include set-text(
      500,
      45,
      rgba($color: $color-title, $alpha: 1),
      false,
      ture
    );
  }
  .#{$this}__contents-wrapper {
    @include flex-center;
    .#{$this}__content {
      @include flex-column;
      &.center {
        margin: 0 90px;
        position: relative;
        top: 140px;
      }
      .#{$this}__image-wrapper {
        width: 405px;
        height: 100%;
        @include cover-background;
        .#{$this}__image {
        }
      }
      .#{$this}__content-title {
        padding-top: 15px;
        padding-bottom: 5px;
        @include set-text(
          500,
          25,
          rgba($color: $color-title, $alpha: 1),
          false,
          ture
        );
      }
      .#{$this}__content-desc {
        @include set-text(400, 18, rgba($color: $color-desc, $alpha: 1));
      }
    }
  }
}
</style>
