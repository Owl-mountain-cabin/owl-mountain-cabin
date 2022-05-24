<template>
  <div class="owl-franchise-sixth-wrapper">
    <div class="owl-franchise-sixth__title-wrapper">
      <div class="owl-franchise-sixth__title" v-html="checkN(title)" />
      <div class="owl-franchise-sixth__sub" v-html="checkN(subTitle)" />
    </div>
    <div class="owl-franchise-sixth__contents-wrapper">
      <div
        class="owl-franchise-sixth__contents-box"
        v-for="(item, index) in process"
        :key="index"
      >
        <div class="owl-franchise-sixth__contents">
          <div class="owl-franchise-sixth__step-wrapper">
            <div class="owl-franchise-sixth__image-wrapper">
              <v-img
                cover
                width="101px"
                class="owl-franchise-sixth__image"
                :lazy-src="require(`@/assets/images/${item.src}.svg`)"
                :src="require(`@/assets/images/${item.src}.svg`)"
              />
            </div>
            <div class="owl-franchise-sixth__name-wrapper">
              <div class="owl-franchise-sixth__step">{{ item.step }}</div>
              <div
                class="owl-franchise-sixth__name"
                v-html="checkN(item.name)"
              />
            </div>
          </div>
          <div class="owl-franchise-sixth__desc-wrapper">
            <div class="owl-franchise-sixth__name-wrapper">
              <div class="owl-franchise-sixth__step">{{ item.step }}</div>
              <div
                class="owl-franchise-sixth__name"
                v-html="checkN(item.name)"
              />
            </div>
            <div class="owl-franchise-sixth__desc" v-html="checkN(item.desc)" />
          </div>
        </div>
        <div
          class="owl-franchise-sixth__image-pass-wrapper"
          v-if="item.src !== 'franchise-sixth6'"
        >
          <v-img
            cover
            width="12px"
            class="owl-franchise-sixth__image-pass"
            :lazy-src="require(`@/assets/images/franchise-sixth-pass.svg`)"
            :src="require(`@/assets/images/franchise-sixth-pass.svg`)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contents from "@/constants/franchise/sixth.json";
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
      subTitle: contents.subTitle,
      process: contents.process,
    };
  },
};
</script>

<style lang="scss">
.owl-franchise-sixth-wrapper {
  $this: "owl-franchise-sixth";
  width: 100%;
  @include flex-center-column;
  .#{$this}__title-wrapper {
    padding-bottom: 148px;
    @include mobile {
      padding-bottom: 50px;
    }
    .#{$this}__title {
      @include set-text(
        400,
        35,
        rgba($color: $color-title, $alpha: 1),
        false,
        ture
      );
      text-align: center;
      @include mobile {
        font-size: 1.4rem;
      }
    }
    .#{$this}__sub {
      padding-top: 19px;
      @include set-text(400, 22, rgba($color: $color-title, $alpha: 1));
      text-align: center;
      @include mobile {
        padding-top: 0;
        font-size: 0.9rem;
      }
    }
  }
  .#{$this}__image {
    height: 100%;
    @include cover-background;
  }

  .#{$this}__contents-wrapper {
    width: 100%;
    @include flex-center-vert;
    @include tablet {
      flex-direction: column;
    }
    .#{$this}__contents-box {
      width: 20%;
      @include tablet {
        width: 100%;
        padding-bottom: 80px;
        position: relative;
      }
      @include flex-center-vert;
      .#{$this}__contents {
        width: 90%;
        height: 300px;
        @include flex-column;
        @include tablet {
          flex-direction: row;
          align-items: center;
          width: 100%;
          height: auto;
        }
        .#{$this}__step-wrapper {
          max-height: 200px;
          @include flex-center-column;
          justify-content: space-between;
          @include tablet {
            width: 40%;
          }
          .#{$this}__image-wrapper {
            padding-bottom: 10px;
            .#{$this}__image {
              width: 100%;
              height: 100%;
              @include cover-background;
            }
          }
          .#{$this}__name-wrapper {
            padding-bottom: 30px;
            @include tablet {
              display: none !important;
            }
            .#{$this}__step {
              @include set-text(
                400,
                16,
                rgba($color: $color-accent, $alpha: 1),
                false,
                ture
              );
              text-align: center;
            }
            .#{$this}__name {
              @include set-text(
                400,
                22,
                rgba($color: $color-title, $alpha: 1),
                false,
                ture
              );
              text-align: center;
              .small {
                @include set-text(
                  400,
                  14,
                  rgba($color: $color-title, $alpha: 1),
                  false,
                  ture
                );
              }
            }
          }
        }
        .#{$this}__desc-wrapper {
          @include tablet {
            width: 60%;
            padding-left: 20px;
          }
          .#{$this}__name-wrapper {
            padding-bottom: 30px;
            @include mobile {
              padding-bottom: 10px;
            }
            @include tablet {
              display: none;
            }
            .#{$this}__step {
              @include set-text(
                400,
                16,
                rgba($color: $color-accent, $alpha: 1),
                false,
                ture
              );
            }
            .#{$this}__name {
              @include set-text(
                400,
                22,
                rgba($color: $color-title, $alpha: 1),
                false,
                ture
              );
              .small {
                @include set-text(
                  400,
                  14,
                  rgba($color: $color-title, $alpha: 1),
                  false,
                  ture
                );
              }
            }
            display: none;
            @include tablet {
              display: block;
            }
          }
          .#{$this}__desc {
            @include set-text(400, 16, rgba($color: $color-desc, $alpha: 1));
            text-align: center;
            @include mobile {
              font-size: 0.8rem;
              text-align: left;
            }
          }
        }
      }
      .#{$this}__image-pass-wrapper {
        width: 10%;
        @include tablet {
          width: 16px;
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
        }
        .#{$this}__image-pass {
          width: 100%;
          height: auto;
          @include cover-background;
          transform: rotate(90deg);
        }
      }
    }
  }
}
</style>
