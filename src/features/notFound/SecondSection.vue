<template>
  <div class="owl-not-found-second-wrapper">
    <div class="owl-not-found-second__contents-wrapper">
      <div class="owl-not-found-second__image-wrapper">
        <v-img
          cover
          class="owl-not-found-second__image"
          lazy-src="https://res.cloudinary.com/dexj7izei/image/upload/v1671708925/company-owl_lutxpr.svg"
          src="https://res.cloudinary.com/dexj7izei/image/upload/v1671708925/company-owl_lutxpr.svg"
        />
      </div>
      <div class="owl-not-found-second__title-wrapper" v-html="checkN(title)" />
      <v-btn
        class="owl-not-found-second--home"
        elevation="0"
        @click="$router.push('/')"
      >
        Home
      </v-btn>
    </div>
  </div>
</template>

<script>
import contents from "@/constants/notFound/second.json";
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
.owl-not-found-second-wrapper {
  $this: "owl-not-found-second";
  width: 100%;
  .#{$this}__contents-wrapper {
    @include flex-center;
    flex-direction: column;
    .#{$this}__image-wrapper {
      width: 290px;
      height: auto;
      @include tablet {
        width: 200px;
      }
      .#{$this}__image {
        height: 100%;
        @include cover-background;
      }
    }
    .#{$this}__title-wrapper {
      margin-top: 80px;
      @include set-text(
        400,
        60,
        rgba($color: $color-title, $alpha: 1),
        false,
        ture
      );
      text-align: center;
      @include tablet {
        font-size: 2rem;
        margin-top: 50px;
      }
      .stressed {
        @include set-text(
          400,
          60,
          rgba($color: $color-accent, $alpha: 1),
          false,
          ture
        );
        @include tablet {
          font-size: 2rem;
        }
      }
    }
    .#{$this}--home {
      margin-top: 20px;
      @include set-text(700, 25, rgba($color: $color-title, $alpha: 1));
      text-align: center;
      padding: 30px;
      background: rgba($color: $color-accent, $alpha: 1);
    }
  }
}
</style>
