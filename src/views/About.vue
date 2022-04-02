<template>
  <div class="owl-about">
    <Dimmed :height="'463px'" />
    <ImageWrapper :imageSrc="'about-header-image.png'" title="ABOUT" />
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
