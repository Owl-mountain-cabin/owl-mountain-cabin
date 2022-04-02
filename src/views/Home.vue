<template>
  <div class="owl-home">
    <div class="owl-home__first-section"><Dimmed /> <FirstSection /></div>
  </div>
</template>

<script>
import Dimmed from "@/components/Dimmed.vue";
import FirstSection from "@/features/home/firstSection.vue";
export default {
  components: {
    Dimmed,
    FirstSection,
  },
};
</script>

<style lang="scss">
.owl-home {
  $this: "owl-home";
  .#{$this}__first-section {
    height: 100vh;
  }
}
</style>
