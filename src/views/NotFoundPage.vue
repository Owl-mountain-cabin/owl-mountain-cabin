<template>
  <div class="owl-not-found-page">
    <div class="not-found-page__first-section">
      <div class="not-found-page__section not-found-page__second-section">
        <SecondSection />
      </div>
    </div>
  </div>
</template>

<script>
import SecondSection from "@/features/notFound/SecondSection.vue";
export default {
  name: "NotFoundPage",
  components: {
    SecondSection,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">
.owl-not-found-page {
  $this: "not-found-page";
  .#{$this}__section {
    height: 100vh;
  }
  .#{$this}__first-section {
    position: relative;
  }
  .#{$this}__second-section {
    padding-top: 207px;
    padding-bottom: 207px;
  }
}
</style>
