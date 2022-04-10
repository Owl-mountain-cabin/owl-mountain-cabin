<template>
  <div class="owl-home-sixth-wrapper">
    <div class="owl-home-sixth__image-wrapper">
      <v-img
        class="owl-home-sixth__image"
        contain
        :lazy-src="require(`@/assets/images/team-member.png`)"
        :src="require(`@/assets/images/team-member.png`)"
      />
    </div>
    <div class="owl-home-sixth__contents-wrapper">
      <div class="owl-home-sixth__title-wrapper" v-html="checkN(title)" />
      <div class="owl-home-sixth__desc-wrapper" v-html="checkN(desc)" />
    </div>
  </div>
</template>

<script>
import contents from "@/constants/home/sixth.json";
import { lineBreak } from "@/utils/helper";

export default {
  computed: {
    checkN() {
      return (str) => lineBreak(str);
    },
  },
  data() {
    return {
      title: contents.title,
      desc: contents.desc,
    };
  },
};
</script>

<style lang="scss">
.owl-home-sixth-wrapper {
  $this: "owl-home-sixth";
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .#{$this}__image-wrapper {
    width: 50%;
    height: 100%;
    .#{$this}__image {
      @include cover-background;
    }
  }

  .#{$this}__contents-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 84px;
    justify-content: center;
    .#{$this}__title-wrapper {
      padding-bottom: 40px;
      justify-self: flex-start;
      @include set-text(
        400,
        40,
        rgba($color: $color-title, $alpha: 1),
        false,
        true
      );
    }
    .#{$this}__desc-wrapper {
      @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
      justify-self: flex-start;
    }
  }
}
</style>
