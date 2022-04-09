<template>
  <div class="owl-home-seven-wrapper">
    <div class="owl-home-seven__contents-wrapper">
      <div class="owl-home-seven__title-wrapper">{{ title }}</div>
      <div class="owl-home-seven__button-wrapper">
        <v-btn class="owl-home-seven--more" elevation="0">
          more
          <v-icon class="owl-home-seven__icon">$plus</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { title } from "@/constants/home/seven.json";

export default {
  data() {
    return {
      title,
    };
  },
};
</script>

<style lang="scss">
.owl-home-seven-wrapper {
  $this: "owl-home-seven";
  width: 100%;
  .#{$this}__contents-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .#{$this}__title-wrapper {
      padding-bottom: 45px;
      @include set-text(
        400,
        25,
        rgba($color: $color-title, $alpha: 1),
        false,
        true
      );
    }
    .#{$this}__button-wrapper {
      .#{$this}--more {
        width: 113px;
        height: 35px;
        background: transparent;
        border: 1px solid $color-desc;
        @include rounded(30px);
        @include set-text(400, 11, rgba($color: $color-desc, $alpha: 1));
        .#{$this}__icon {
          width: 15px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
