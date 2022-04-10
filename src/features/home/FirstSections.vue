<template>
  <div class="owl-home-first-wrapper">
    <div class="owl-home-first__background-wrapper">
      <v-img
        class="owl-home-first__background"
        cover
        :lazy-src="require(`@/assets/images/home-first-section.png`)"
        :src="require(`@/assets/images/home-first-section.png`)"
      />
    </div>
    <div class="owl-home-first__contents-wrapper">
      <div class="owl-home-first__title-wrapper">
        <v-img
          class="owl-home-first__title"
          contain
          :lazy-src="require(`@/assets/images/home-title.svg`)"
          :src="require(`@/assets/images/home-title.svg`)"
        />
      </div>
      <div class="owl-home-first__desc">
        {{ desc1 }}
        <br />
        {{ desc2 }}
        <br />
        {{ desc3 }}
      </div>
      <div class="owl-home-first__button-wrapper">
        <v-btn class="owl-home-first--more">
          more
          <v-icon class="owl-home-first__icon">$plus</v-icon>
        </v-btn>
      </div>
      <div class="owl-home-first__scroll-wrapper">
        <v-img
          class="owl-home-first__scroll-image"
          contain
          :lazy-src="require(`@/assets/images/home-scroll.svg`)"
          :src="require(`@/assets/images/home-scroll.svg`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import contents from "@/constants/home/first.json";
export default {
  data() {
    return {
      desc1: contents.desc1,
      desc2: contents.desc2,
      desc3: contents.desc3,
    };
  },
};
</script>

<style lang="scss">
.owl-home-first-wrapper {
  $this: "owl-home-first";
  position: relative;
  height: 100%;
  .#{$this}__background-wrapper {
    height: 100%;
    .#{$this}__background {
      @include cover-background;
      height: 100%;
    }
  }

  .#{$this}__contents-wrapper {
    position: absolute;
    width: calc(100% - 15% - 15%);
    top: 40%;
    left: 15%;
    z-index: 501;
    @include desktop-small {
      top: 340px;
    }
    .#{$this}__title-wrapper {
      width: 455px;
      margin-bottom: 76px;
    }
    .#{$this}__desc {
      @include set-text(300, 20, rgba($color: $color-white, $alpha: 1));
      line-height: 1.7;
      margin-bottom: 42px;
    }
    .#{$this}__button-wrapper {
      .#{$this}--more {
        width: 113px;
        height: 35px;
        background: transparent;
        border: 1px solid $color-white;
        @include rounded(20px);
        @include set-text(400, 11, rgba($color: $color-white, $alpha: 1));
        .#{$this}__icon {
          width: 15px;
          margin-left: 10px;
        }
      }
    }
    .#{$this}__scroll-wrapper {
      position: absolute;
      left: 50%;
      margin-top: 147px;
      .#{$this}__scroll-image {
        width: 20px;
      }
    }
  }
}
</style>
