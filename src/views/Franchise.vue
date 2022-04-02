<template>
  <div class="owl-franchise">
    <div class="owl-store">
      <Dimmed :height="'463px'" />
      <ImageWrapper
        :imageSrc="'franchise-header-image.png'"
        title="FRANCHISE"
      />
    </div>
  </div>
</template>

<script>
import Dimmed from "@/components/Dimmed.vue";
import ImageWrapper from "@/components/ImageWrapper.vue";
export default {
  components: {
    Dimmed,
    ImageWrapper,
  },
};
</script>

<style lang="scss"></style>
