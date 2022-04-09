<template>
  <div class="owl-menu-fifth-wrapper">
    <div
      class="owl-menu-fifth__contents-wrapper"
      v-for="(item, index) in summary"
      :key="index"
    >
      <div class="owl-menu-fifth__title-wrapper">
        {{ item.title }}
      </div>
      <div class="owl-menu-fifth__image-wrapper">
        <ImageRowBox :images="item.images" :width="item.width" />
      </div>
    </div>
  </div>
</template>

<script>
import { summary } from "@/constants/menu/fifth.json";
import ImageRowBox from "@/components/ImageRowBox.vue";
export default {
  components: {
    ImageRowBox,
  },
  data() {
    return {
      summary,
    };
  },
};
</script>

<style lang="scss">
.owl-menu-fifth-wrapper {
  $this: "owl-menu-fifth";
  width: 100%;
  .#{$this}__contents-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 47px;
    &:first-child {
      margin-top: 0;
    }
    .#{$this}__title-wrapper {
      @include set-text(
        400,
        30,
        rgba($color: $color-title, $alpha: 1),
        false,
        true
      );
    }
    .#{$this}__image-wrapper {
      width: 100%;
    }
  }
}
</style>
