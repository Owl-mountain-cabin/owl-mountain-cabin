<template>
  <div class="owl-franchise-third-wrapper">
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
// import Dimmed from "@/components/Dimmed.vue";
import { lineBreak } from "@/utils/helper";
export default {
  components: {
    //Dimmed,
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
  //position: relative;
  background: url(@/assets/images/franchise-third1.png) no-repeat center;
  @include flex-center-column;
  .#{$this}__image {
    height: 100%;
    @include cover-background;
    @include mobile {
      min-height: 650px;
    }
  }

  .#{$this}__merits-list-wrapper {
    margin-top: auto;
  }

  .#{$this}__merits-wrapper {
    @include flex-center-column;
    background-color: rgba(0, 0, 0, 0.5);
    min-width: 70%;
    height: 100%;
    z-index: 700;
    padding: 5% 0;
    @include desktop-medium {
      width: 1280px;
    }
    @include desktop-small {
      padding: 4% 0;
    }
    @include mobile {
      padding: 50px 20px;
    }

    br {
      @include desktop-medium {
        display: none;
      }
    }
    br {
      @include desktop-small {
        display: none;
      }
      @include mobile {
        display: none;
      }
    }
    .#{$this}__title-wrapper {
      @include set-text(bold, 50, rgba($color: $color-white, $alpha: 1));
      text-align: center;
      //margin-bottom: 71px;
      @include desktop-small {
        font-size: 2.5rem;
        margin-bottom: 30px;
      }
      @include mobile {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }

    .#{$this}__merit-wrapper {
      display: flex;
      //margin-bottom: 71px;
      //width: 100%;
      width: 1280px;
      margin-top: 70px;

      @include desktop-medium {
        width: 1600px;
        margin-top: 50px;
        padding: 0 40px;
      }
      @include desktop-small {
        width: 100%;
        margin-top: 30px;
        padding: 0 40px;
      }
      @include mobile {
        width: 100%;
        margin-top: 15px;
      }
      &:first-child {
        margin-top: 0;
      }

      .#{$this}__sub {
        width: 20%;
        @include set-text(400, 24, rgba($color: $color-white, $alpha: 1));
        @include desktop-small {
          font-size: 1.2rem;
        }
        @include mobile {
          font-size: 0.9rem;
          padding: 0 5px 0 0;
        }
      }
      .#{$this}__desc {
        width: 80%;
        @include set-text(400, 21, rgba($color: $color-white, $alpha: 1));
        @include desktop-small {
          font-size: 1rem;
        }
        @include mobile {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
