<template>
  <div class="owl-home-first-wrapper">
    <div
      v-if="isMobile || isKakao || isSafari"
      class="owl-home-first__background-wrapper"
    >
      <v-img
        class="owl-home-first__background"
        cover
        :lazy-src="require(`@/assets/images/home-first-section.webp`)"
        :src="require(`@/assets/images/home-first-section.webp`)"
      />
    </div>
    <div
      v-if="isMobile || isKakao || isSafari"
      class="owl-home-first__contents-wrapper"
    >
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
        <v-btn class="owl-home-first--more" @click="$router.push('/company')">
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
        <v-img
          class="owl-home-first__scroll-image-mobile"
          contain
          :lazy-src="require(`@/assets/images/owl-main-arrow-down.webp`)"
          :src="require(`@/assets/images/owl-main-arrow-down.webp`)"
        />
      </div>
    </div>
    <video
      class="owl-home-first__video"
      id="main-video"
      v-if="!isMobile && !isKakao && !isSafari"
      width="auto"
      height="100%"
      playsinline
      autoplay
      loop
      muted
      preload="auto"
      src="https://res.cloudinary.com/dexj7izei/video/upload/v1690704873/main_es5md6.mp4"
    />
  </div>
</template>

<script>
import contents from "@/constants/home/first.json";
export default {
  name: "FirstSection",
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      desc1: contents.desc1,
      desc2: contents.desc2,
      desc3: contents.desc3,
      isKakao: false,
      isSafari: false,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.isKakao = this.isKakaoBrowser();
    this.isSafari = this.isSafariBrowser();
  },
  methods: {
    isKakaoBrowser() {
      const isKakao = navigator.userAgent.match("KAKAOTALK");
      return Boolean(isKakao);
    },
    isSafariBrowser() {
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        return true;
      }
      return false;
    },
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
    .v-image__image {
      @include mobile {
        background-position: 62% center !important;
      }
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
    @include mobile {
      width: calc(100% - 40px);
      top: auto;
      bottom: 28%;
      left: 20px;
      transform: translateY(50%);
    }
    @include mobile-small {
      bottom: 30%;
    }
    .#{$this}__title-wrapper {
      width: 455px;
      margin-bottom: 76px;
      @include mobile {
        width: 100%;
        margin-bottom: 20px;
      }
      @include mobile-small {
        width: 180px;
        margin-bottom: 10px;
      }
      .v-image {
        @include mobile {
          width: 200px;
        }
        @include mobile-small {
          width: 180px;
        }
      }
    }
    .#{$this}__desc {
      @include set-text(300, 20, rgba($color: $color-white, $alpha: 1));
      line-height: 1.7;
      margin-bottom: 42px;
      @include mobile {
        @include set-text(300, 13, rgba($color: $color-white, $alpha: 1));
        margin-top: 3.5vh;
      }
      @include mobile-small {
        @include set-text(300, 12, rgba($color: $color-white, $alpha: 1));
      }
    }
    .#{$this}__button-wrapper {
      @include mobile {
        display: none;
      }
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
      @include mobile {
        margin-top: 80px;
      }
      .#{$this}__scroll-image {
        width: 20px;
        @include mobile {
          display: none;
        }
      }
      .#{$this}__scroll-image-mobile {
        display: none;
        @include mobile {
          display: block;
        }
      }
    }
  }
  .#{$this}__image-box {
    width: 30px;
    height: auto;
    position: absolute;
    bottom: 30px;
    left: 60px;
    .#{$this}__image {
      @include cover-background;
      height: 100%;
    }
  }
  .#{$this}__video {
    width: 100%;
    object-fit: cover;
  }
}
</style>
