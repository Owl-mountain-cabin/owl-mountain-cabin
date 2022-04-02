<template>
  <div class="owl-dimmed-wrapper" :style="{ height }"></div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: "100%",
      description: "height of dimmed wrapper",
    },
  },
};
</script>

<style lang="scss">
.owl-dimmed-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba($color: $color-black, $alpha: 0.5);
  z-index: 500;
}
</style>
