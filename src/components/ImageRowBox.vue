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
          :lazy-src="require(`@/assets/images/${item.src}`)"
          :src="require(`@/assets/images/${item.src}`)"
        />
      </div>
      <div class="owl-image-row__title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
      description: "images",
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
    }
    &.w-20 {
      width: 20%;
    }
    .#{$this}__image-box {
      width: 100%;
      height: 259px;

      .#{$this}__image {
        width: 100%;
        height: 100%;
        @include cover-background;
      }
    }
    .#{$this}__title {
      @include set-text(400, 20, rgba($color: $color-title, $alpha: 1));
    }
  }
}
</style>
