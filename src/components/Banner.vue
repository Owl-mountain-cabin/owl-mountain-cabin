<template>
  <div class="owl-banner" data-aos="fade-left" @click="handleCall">
    <div class="owl-banner__title-wrapper">
      <v-icon class="">$phone</v-icon>
      {{ title }}
    </div>
    <div class="owl-banner__desc-wrapper">{{ desc }}</div>
  </div>
</template>

<script>
import AOS from "aos";
export default {
  props: {
    title: {
      type: String,
      default: "",
      description: "배너 타이틀",
    },
    desc: {
      type: String,
      default: "",
      description: "배너 설명",
    },
  },
  mounted() {
    AOS.init({
      duration: 1000,
      once: true,
      throttleDelay: 100,
    });
  },
  destroyed() {
    AOS.refreshHard();
  },
  methods: {
    handleCall() {
      document.location.href = "tel:1566-8107";
    },
  },
};
</script>

<style lang="scss">
.owl-banner {
  $this: "owl-banner";
  @include flex-center;
  flex-direction: column;
  width: 152px;
  height: 152px;
  position: fixed;
  right: 40px;
  bottom: 40px;
  @include box-shadow(
    5px,
    5px,
    10px,
    2px,
    rgba($color: $color-black, $alpha: 0.5)
  );
  @include rounded(150px);
  background-color: $color-accent;
  z-index: 999;

  @include mobile {
    width: 100px;
    height: 100px;
    right: 20px;
    bottom: 9%;
  }
  @include mobile-small {
    width: 90px;
    height: 90px;
    bottom: 5%;
  }

  .#{$this}__title-wrapper {
    @include set-text(400, 22, rgba($color: $color-white, $alpha: 1));
    text-align: center;
    @include mobile {
      @include set-text(400, 16, rgba($color: $color-white, $alpha: 1));
    }
    @include mobile-small {
      @include set-text(400, 15, rgba($color: $color-white, $alpha: 1));
    }
  }
  .#{$this}__desc-wrapper {
    margin-top: 10px;
    @include set-text(400, 18, rgba($color: $color-white, $alpha: 1));
    text-align: center;
    @include mobile {
      margin-top: 0;
      @include set-text(400, 12, rgba($color: $color-white, $alpha: 1));
    }
    @include mobile-small {
      @include set-text(400, 11, rgba($color: $color-white, $alpha: 1));
    }
  }
}
</style>
