<template>
  <div class="owl-home-fifth-wrapper">
    <div class="owl-home-fifth__title">{{ title }}</div>
    <div class="owl-home-fifth__contents-wrapper">
      <div
        class="owl-home-fifth__content"
        v-for="(item, index) in data"
        :key="index"
        :class="{ center: index === 1 }"
      >
        <div
          class="owl-home-fifth__image-wrapper"
          @mouseover="onMouseOverImage(index)"
        >
          <a v-if="item.herf" :href="item.herf" target="_blank">
            <Dimmed
              class="owl-home-fifth--dimmed"
              :class="isHover === index && 'isActive'"
              height="100%"
            />
            <v-img
              class="owl-home-fifth__image"
              cover
              :lazy-src="require(`@/assets/images/${item.src}.webp`)"
              :src="require(`@/assets/images/${item.src}.webp`)"
            />
          </a>
          <v-img
            v-if="!item.herf"
            class="owl-home-fifth__image"
            cover
            :lazy-src="require(`@/assets/images/${item.src}.webp`)"
            :src="require(`@/assets/images/${item.src}.webp`)"
          />
        </div>
        <div class="owl-home-fifth__content-title">{{ item.title }}</div>
        <div class="owl-home-fifth__content-desc" v-html="checkN(item.desc)" />
      </div>
    </div>
  </div>
</template>

<script>
import contents from "@/constants/home/fifth.json";
import { lineBreak } from "@/utils/helper";
import Dimmed from "@/components/Dimmed.vue";

export default {
  components: { Dimmed },
  computed: {
    checkN() {
      return (str) => lineBreak(str);
    },
  },
  data() {
    return {
      title: contents.title,
      data: contents.data,
      isHover: -1,
    };
  },
  methods: {
    onMouseOverImage(index) {
      this.isHover = index;
    },
  },
};
</script>

<style lang="scss">
.owl-home-fifth-wrapper {
  $this: "owl-home-fifth";
  height: 100%;
  .#{$this}__title {
    text-align: center;
    padding: 30px 0 53px;
    @include set-text(
      500,
      45,
      rgba($color: $color-title, $alpha: 1),
      false,
      ture
    );
    @include tablet {
      @include set-text(
        500,
        32,
        rgba($color: $color-title, $alpha: 1),
        false,
        ture
      );
      letter-spacing: -0.4px;
    }
  }
  .#{$this}__contents-wrapper {
    @include flex-center;
    @include tablet {
      flex-direction: column;
    }
    .#{$this}__content {
      @include flex-column;
      @include tablet {
        width: 100%;
      }
      &.center {
        margin: 0 90px;
        position: relative;
        top: 140px;
        @include tablet {
          margin: 0;
          position: static;
        }
      }
      .#{$this}__image-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        .#{$this}--dimmed {
          visibility: hidden;
          &.isActive {
            visibility: visible;
          }
        }
        .#{$this}__image {
          @include cover-background;
          @include tablet {
            width: 100%;
          }
        }
      }
      .#{$this}__content-title {
        padding-top: 15px;
        padding-bottom: 5px;
        @include set-text(
          500,
          25,
          rgba($color: $color-title, $alpha: 1),
          false,
          ture
        );
        @include tablet {
          @include set-text(
            500,
            22,
            rgba($color: $color-title, $alpha: 1),
            false,
            ture
          );
        }
      }
      .#{$this}__content-desc {
        @include set-text(400, 18, rgba($color: $color-desc, $alpha: 1));
        @include tablet {
          margin: 0 0 52px 0;
          @include set-text(400, 12, rgba($color: $color-desc, $alpha: 0.7));
        }
      }
    }
  }
}
</style>
