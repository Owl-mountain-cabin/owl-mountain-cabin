<template>
  <div class="owl-store-second-wrapper">
    <div class="owl-store-second__image-wrapper">
      <v-img
        class="owl-store-second__image"
        contain
        :lazy-src="require(`@/assets/images/${image}`)"
        :src="require(`@/assets/images/${image}`)"
      />
    </div>
    <div class="owl-store-second__contents-wrapper">
      <div class="owl-store-second__title-wrapper" v-html="checkN(title)" />
      <div class="owl-store-second__desc-wrapper" v-html="checkN(desc)" />
      <div class="owl-store-second__address-wrapper" v-html="checkN(address)" />
    </div>
  </div>
</template>

<script>
import { lineBreak } from "@/utils/helper";

export default {
  props: {
    title: {
      type: String,
      default: "",
      description: "title",
    },
    desc: {
      type: String,
      default: "",
      description: "desc",
    },
    address: {
      type: String,
      default: "",
      description: "address",
    },
    image: {
      type: String,
      default: "",
      description: "image",
    },
  },
  computed: {
    checkN() {
      return (str) => lineBreak(str);
    },
  },
};
</script>

<style lang="scss">
.owl-store-second-wrapper {
  $this: "owl-store-second";
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @include tablet {
    width: 100%;
    flex-direction: column;
  }
  .#{$this}__image-wrapper {
    width: 50%;
    height: 100%;
    @include tablet {
      width: 100%;
      padding: 0;
      margin-bottom: 30px;
    }
    .#{$this}__image {
      height: 100%;
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
    @include desktop-small {
      margin-left: 30px;
    }
    @include tablet {
      margin: 0;
      width: 100%;
    }
    .#{$this}__title-wrapper {
      padding-bottom: 40px;
      @include set-text(400, 40, rgba($color: $color-title, $alpha: 1));
      @include desktop-small {
        font-size: 1.8rem;
      }
      @include tablet {
        padding-bottom: 20px;
        font-size: 1.6rem;
        letter-spacing: -0.5px;
      }
    }
    .#{$this}__desc-wrapper {
      @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
      @include desktop-small {
        font-size: 1rem;
      }
      @include tablet {
        font-size: 0.9rem;
      }
      br {
        @include tablet {
          display: none;
        }
        @include desktop-small {
          display: none;
        }
      }
    }
    .#{$this}__address-wrapper {
      padding-top: 81px;
      @include set-text(400, 20, rgba($color: $color-title, $alpha: 1));
      @include desktop-small {
        padding-top: 45px;
      }
      @include tablet {
        padding-top: 30px;
        font-size: 0.9rem;
      }
    }
  }
}
</style>
