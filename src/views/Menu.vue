<template>
  <div class="owl-menu">
    <Dimmed :height="'463px'" />
    <ImageWrapper :imageSrc="'about-header-image.png'" title="MENU" />
  </div>
</template>

<script>
import Dimmed from "@/components/Dimmed.vue";
import ImageWrapper from "@/components/imageWrapper.vue";
export default {
  components: {
    Dimmed,
    ImageWrapper,
  },
};
</script>

<style lang="scss"></style>
