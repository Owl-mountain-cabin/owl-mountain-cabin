<template>
  <div class="owl-home-sixth-wrapper">
    <div class="owl-home-sixth__image-wrapper">
      <v-img
        class="owl-home-sixth__image"
        contain
        lazy-src="https://res.cloudinary.com/dexj7izei/image/upload/v1671708956/team-member_n8gzrj.png"
        src="https://res.cloudinary.com/dexj7izei/image/upload/v1671708956/team-member_n8gzrj.png"
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
  @include tablet {
    flex-direction: column;
  }

  .#{$this}__image-wrapper {
    width: 50%;
    height: 100%;
    .#{$this}__image {
      @include cover-background;
    }
    @include tablet {
      width: 100%;
    }
  }

  .#{$this}__contents-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 84px;
    justify-content: center;
    @include tablet {
      width: 100%;
      padding: 20px 0;
      margin-left: 0;
    }
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
      @include tablet {
        padding: 20px 0;
        text-align: center;
        @include set-text(
          400,
          24,
          rgba($color: $color-title, $alpha: 1),
          false,
          true
        );
      }
    }
    .#{$this}__desc-wrapper {
      @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
      justify-self: flex-start;
      @include tablet {
        @include set-text(400, 14, rgba($color: $color-desc, $alpha: 1));
        text-align: center;
      }
      br {
        @include tablet {
          display: none;
        }
      }
    }
  }
}
</style>
