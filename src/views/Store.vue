<template>
  <div class="owl-store">
    <Dimmed :height="'463px'" />
    <ImageWrapper :imageSrc="'store-header-image.png'" title="STORE" />
  </div>
</template>

<script>
import Dimmed from "@/components/Dimmed.vue";
import ImageWrapper from "@/components/ImageWrappers.vue";
export default {
  components: {
    Dimmed,
    ImageWrapper,
  },
};
</script>

<style lang="scss"></style>
