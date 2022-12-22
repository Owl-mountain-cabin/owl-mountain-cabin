<template>
  <div class="owl-image-row">
    <div
      class="owl-image-row__box"
      v-for="(item, index) in images"
      :key="index"
      :class="item.width"
    >
      <div class="owl-image-row__image-box">
        <v-img
          class="owl-image-row__image"
          cover
          :lazy-src="`https://res.cloudinary.com/${item.src}`"
          :src="`https://res.cloudinary.com/${item.src}`"
        />
      </div>
      <div class="owl-image-row__title">{{ item.title }}</div>
      <div class="owl-image-row__desc" v-html="checkN(item.desc)" />
    </div>
  </div>
</template>

<script>
import { lineBreak } from "@/utils/helper";
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
      description: "images",
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
.owl-image-row {
  $this: "owl-image-row";
  @include flex-center-vert;
  flex-wrap: wrap;
  .#{$this}__box {
    @include flex-center-column;
    &.w-40 {
      width: 40%;
      @include tablet {
        width: 50%;
      }
    }
    &.w-20 {
      width: 20%;
      @include tablet {
        width: 50%;
      }
    }
    @include tablet {
      padding: 10px 5px 0 5px;
    }
    br {
      @include tablet {
        display: none;
      }
    }
    .#{$this}__image-box {
      width: 100%;
      height: 259px;
      @include tablet {
        height: auto;
      }
      .#{$this}__image {
        width: 100%;
        height: 100%;
        @include cover-background;
      }
    }
    .#{$this}__title {
      @include set-text(400, 20, rgba($color: $color-title, $alpha: 1));
      margin-bottom: 10px;
      @include tablet {
        font-size: 1.1rem;
      }
    }
    .#{$this}__desc {
      text-align: center;

      @include set-text(400, 13, rgba($color: $color-desc, $alpha: 1));
      @include tablet {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
