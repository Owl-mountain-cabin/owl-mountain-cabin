<template>
  <div class="owl-franchise-third-wrapper">
    <Dimmed :height="'100%'" />
    <v-img
      cover
      width="100%"
      height="100%"
      class="owl-franchise-third__image"
      :lazy-src="require(`@/assets/images/franchise-third1.png`)"
      :src="require(`@/assets/images/franchise-third1.png`)"
    />
    <div class="owl-franchise-third__merits-wrapper">
      <div class="owl-franchise-third__title-wrapper" v-html="checkN(title)" />
      <div class="owl-franchise-third__merits-list-wrapper">
        <div
          class="owl-franchise-third__merit-wrapper"
          v-for="(item, index) in merits"
          :key="index"
        >
          <div class="owl-franchise-third__sub" v-html="checkN(item.name)" />
          <div class="owl-franchise-third__desc" v-html="checkN(item.desc)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contents from "@/constants/franchise/third.json";
import Dimmed from "@/components/Dimmed.vue";
import { lineBreak } from "@/utils/helper";
export default {
  components: {
    Dimmed,
  },
  computed: {
    checkN() {
      return (str) => lineBreak(str);
    },
  },
  data() {
    return {
      title: contents.title,
      merits: contents.merits,
    };
  },
};
</script>

<style lang="scss">
.owl-franchise-third-wrapper {
  $this: "owl-franchise-third";
  width: 100%;

  position: relative;
  @include flex-center-column;
  .#{$this}__image {
    height: 100%;
    @include cover-background;
  }

  .#{$this}__merits-list-wrapper {
    margin-top: auto;
  }

  .#{$this}__merits-wrapper {
    @include flex-center-column;
    position: absolute;
    min-width: 70%;
    height: 100%;
    z-index: 700;
    padding: 5% 0;
    @include desktop-medium {
      padding: 4% 0;
    }

    br {
      @include desktop-medium {
        display: none;
      }
    }
    .#{$this}__title-wrapper {
      @include set-text(bold, 50, rgba($color: $color-white, $alpha: 1));
      text-align: center;
      //margin-bottom: 71px;
    }

    .#{$this}__merit-wrapper {
      display: flex;
      //margin-bottom: 71px;
      //width: 100%;
      width: 1280px;
      margin-top: 70px;

      @include desktop-medium {
        width: 100%;
        margin-top: 30px;
        padding: 0 40px;
      }
      &:first-child {
        margin-top: 0;
      }

      .#{$this}__sub {
        width: 20%;
        @include set-text(400, 24, rgba($color: $color-white, $alpha: 1));
      }
      .#{$this}__desc {
        width: 80%;
        @include set-text(400, 21, rgba($color: $color-white, $alpha: 1));
      }
    }
  }
}
</style>
