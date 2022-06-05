<template>
  <div class="owl-franchise-seventh-wrapper">
    <Dimmed :height="'100%'" />
    <v-img
      cover
      width="100%"
      height="100%"
      class="owl-franchise-seventh__image"
      :lazy-src="require(`@/assets/images/franchise-seventh1.png`)"
      :src="require(`@/assets/images/franchise-seventh1.png`)"
    />
    <div class="owl-franchise-seventh__contents-wrapper">
      <div class="owl-franchise-seventh__title-wrapper">
        <div class="owl-franchise-seventh__title" v-html="checkN(title)" />
        <div class="owl-franchise-seventh__desc" v-html="checkN(desc)" />
      </div>
      <div class="owl-franchise-seventh__diagram-wrapper">
        <div class="owl-franchise-seventh__diagram-image-wrapper">
          <v-img
            cover
            class="owl-franchise-seventh__image"
            :lazy-src="require(`@/assets/images/franchise-seven1.svg`)"
            :src="require(`@/assets/images/franchise-seven1.svg`)"
          />
        </div>
        <div class="owl-franchise-seventh__diagram-contents-wrapper db1">
          <div
            class="owl-franchise-seventh__diagram-contents-name"
            v-html="checkN(db1.name)"
          />
          <div
            class="owl-franchise-seventh__diagram-contents-desc"
            v-html="checkN(db1.desc)"
          />
        </div>
        <div class="owl-franchise-seventh__diagram-contents-wrapper db2">
          <div
            class="owl-franchise-seventh__diagram-contents-name"
            v-html="checkN(db2.name)"
          />
          <div
            class="owl-franchise-seventh__diagram-contents-desc"
            v-html="checkN(db2.desc)"
          />
        </div>
        <div class="owl-franchise-seventh__diagram-contents-wrapper db3">
          <div
            class="owl-franchise-seventh__diagram-contents-name"
            v-html="checkN(db3.name)"
          />
          <div
            class="owl-franchise-seventh__diagram-contents-desc"
            v-html="checkN(db3.desc)"
          />
        </div>
        <div class="owl-franchise-seventh__diagram-contents-wrapper db4">
          <div
            class="owl-franchise-seventh__diagram-contents-name"
            v-html="checkN(db4.name)"
          />
          <div
            class="owl-franchise-seventh__diagram-contents-desc"
            v-html="checkN(db4.desc)"
          />
        </div>
        <div class="owl-franchise-seventh__diagram-contents-wrapper db5">
          <div
            class="owl-franchise-seventh__diagram-contents-name"
            v-html="checkN(db5.name)"
          />
          <div
            class="owl-franchise-seventh__diagram-contents-desc"
            v-html="checkN(db5.desc)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contents from "@/constants/franchise/seventh.json";
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
      desc: contents.desc,
      db1: contents.db1,
      db2: contents.db2,
      db3: contents.db3,
      db4: contents.db4,
      db5: contents.db5,
    };
  },
};
</script>

<style lang="scss">
.owl-franchise-seventh-wrapper {
  $this: "owl-franchise-seventh";
  width: 100%;
  position: relative;
  @include flex-center-column;
  @include tablet {
    min-height: 600px;
  }
  .#{$this}__image {
    height: 100%;
    @include cover-background;
  }

  .#{$this}__contents-wrapper {
    @include flex-center-vert;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 700;
    @include tablet {
      flex-direction: column;
      padding: 50px 0;
    }
    .#{$this}__title-wrapper {
      width: 40%;
      padding-left: 81px;
      @include tablet {
        width: 100%;
        padding: 0;
      }
      .#{$this}__title {
        @include set-text(bold, 35, rgba($color: $color-white, $alpha: 1));
        text-align: center;
        margin-bottom: 25px;
        @include tablet {
          font-size: 1.5rem;
        }
        @include mobile {
          font-size: 1.2rem;
        }
      }
      .#{$this}__desc {
        text-align: center;
        @include set-text(400, 22, rgba($color: $color-white, $alpha: 1));
        @include tablet {
          font-size: 1.1rem;
        }
        @include mobile {
          font-size: 0.9rem;
        }
      }
    }
    .#{$this}__diagram-wrapper {
      width: 60%;
      height: 100%;
      position: relative;
      @include flex-center;
      @include tablet {
        padding: 0;
        width: 100%;
      }
      .#{$this}__diagram-image-wrapper {
        width: 40%;
        @include tablet {
          width: 180px;
        }
        @include mobile {
          width: 140px;
        }
      }
      .#{$this}__diagram-contents-wrapper {
        position: absolute;

        &.db1 {
          top: 13%;
          left: 50%;
          transform: translate(-50%, 0);
          @include tablet {
            top: 10%;
          }
          @include mobile {
            top: 20%;
          }
        }
        &.db2 {
          top: 41%;
          right: 12%;
          transform: translate(-50%, 0);
          @include tablet {
            right: 23%;
          }
          @include mobile {
            right: 20px;
          }
        }
        &.db3 {
          bottom: 15%;
          right: 20%;
          transform: translate(-50%, 0);
          @include tablet {
            right: 28%;
          }
          @include mobile {
            bottom: 20%;
            right: 40px;
          }
        }
        &.db4 {
          bottom: 15%;
          left: 30%;
          transform: translate(-50%, 0);
          @include tablet {
            left: 28%;
            transform: translate(50%, 0);
          }
          @include mobile {
            bottom: 20%;
            left: 30px;
          }
        }
        &.db5 {
          top: 41%;
          left: 20%;
          transform: translate(-50%, 0);
          @include tablet {
            transform: translate(50%, 0);
            left: 22%;
          }
          @include mobile {
            left: -10px;
          }
        }
        .#{$this}__diagram-contents-name {
          @include set-text(
            bold,
            30,
            rgba($color: $color-white, $alpha: 1),
            false,
            ture
          );
          text-align: center;
          @include tablet {
            font-size: 1.2rem;
          }
          @include mobile {
            font-size: 0.9rem;
            font-weight: 500;
          }
        }
        .#{$this}__diagram-contents-desc {
          text-align: center;
          @include set-text(400, 22, rgba($color: #d6d6d6, $alpha: 1));
          @include tablet {
            font-size: 0.8rem;
          }
          @include mobile {
            font-size: 0.7rem;
          }
        }
      }
    }
  }
}
</style>
