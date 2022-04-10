<template>
  <div class="owl-franchise">
    <div class="owl-store">
      <Dimmed :height="'463px'" />
      <ImageWrapper
        :imageSrc="'franchise-header-image.png'"
        title="FRANCHISE"
      />
    </div>
    <Banner :title="title" :desc="desc" />
  </div>
</template>

<script>
import Dimmed from "@/components/Dimmed.vue";
import ImageWrapper from "@/components/ImageWrappers.vue";
import Banner from "@/components/Banner.vue";
import contents from "@/constants/common/index.json";

export default {
  components: {
    Dimmed,
    ImageWrapper,
    Banner,
  },
  data() {
    return {
      title: contents.bannerTitle,
      desc: contents.phone,
    };
  },
};
</script>

<style lang="scss"></style>
