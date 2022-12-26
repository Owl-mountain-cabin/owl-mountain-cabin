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
          :lazy-src="require(`@/assets/images/${item.src}.webp`)"
          :src="require(`@/assets/images/${item.src}.webp`)"
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
import contents from "@/constants/home/forth.json";
import { lineBreak } from "@/utils/helper";

export default {
  computed: {
    checkN() {
      return (str) => lineBreak(str);
    },
  },
  data() {
    return {
      foods: contents.foods,
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
    background: rgba($color: #edede5, $alpha: 0.5);
    @include tablet {
      flex-direction: column;
    }
    &.reverse {
      flex-direction: row-reverse;
      background: rgba($color: #edede5, $alpha: 0.5);
      @include tablet {
        flex-direction: column;
      }
    }

    .#{$this}__image-wrapper {
      width: 50%;
      height: 100%;
      @include cover-background;
      @include tablet {
        width: 100%;
      }
    }
    .#{$this}__title-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      align-items: center;

      @include tablet {
        margin: 53px 0;
      }

      .#{$this}__title {
        @include set-text(
          400,
          60,
          rgba($color: $color-title, $alpha: 1),
          false,
          true
        );

        @include tablet {
          @include set-text(
            400,
            30,
            rgba($color: $color-title, $alpha: 1),
            false,
            true
          );
          line-height: 1;
        }
      }
      .#{$this}__sub-title {
        margin-bottom: 43px;
        @include set-text(400, 25, rgba($color: $color-title, $alpha: 1));
        @include tablet {
          margin-bottom: 0;
          @include set-text(400, 13, rgba($color: $color-title, $alpha: 1));
        }
      }
      .#{$this}__desc {
        line-height: 1.7;
        @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
        @include tablet {
          margin: 20px 0;
          padding: 0 30px;
          text-align: center;
          @include set-text(400, 16, rgba($color: $color-desc, $alpha: 1));
        }
        br {
          @include tablet {
            display: none;
          }
        }
      }
    }
  }
}
</style>
