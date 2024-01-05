<template>
  <footer class="owl-footer">
    <div class="owl-footer-wrapper">
      <div class="owl-footer__logo-wrapper">
        <v-img
          contain
          :lazy-src="require(`@/assets/images/footer-logo.svg`)"
          :src="require(`@/assets/images/footer-logo.svg`)"
        />
      </div>
      <div class="owl-footer__contents-wrapper">
        <div class="owl-footer__desc-wrapper">Address</div>
        <div class="owl-footer__desc-wrapper desc" v-html="checkN(address)" />
      </div>
      <div class="owl-footer__contents-wrapper">
        <div class="owl-footer__desc-wrapper">Contact</div>
        <div class="owl-footer__desc-wrapper desc">{{ name }}</div>
        <div class="owl-footer__desc-wrapper">{{ contact }}</div>
      </div>
      <div class="owl-footer__contents-wrapper">
        <div class="owl-footer__desc-wrapper">Email</div>
        <div class="owl-footer__desc-wrapper desc">{{ email }}</div>
      </div>
      <div class="owl-footer__contents-wrapper">
        <div class="owl-footer__desc-wrapper">SNS</div>
        <a
          class="owl-footer__desc-wrapper desc"
          href="https://www.instagram.com/owlmtcabin_official/"
          target="_blank"
        >
          <v-img
            width="18px"
            height="auto"
            contain
            :lazy-src="require(`@/assets/images/footer-insta.svg`)"
            :src="require(`@/assets/images/footer-insta.svg`)"
          />
        </a>
      </div>
      <div class="owl-footer__contents-wrapper">
        <div class="owl-footer__desc-wrapper">Blog</div>
        <a
          class="owl-footer__desc-wrapper desc"
          href="https://blog.naver.com/trinity_2020"
          target="_blank"
        >
          <v-img
            width="18px"
            height="auto"
            contain
            :lazy-src="require(`@/assets/images/footer-blog.webp`)"
            :src="require(`@/assets/images/footer-blog.webp`)"
          />
        </a>
      </div>
      <div class="owl-footer__contents-wrapper">
        <div class="owl-footer__desc-wrapper">사업자등록번호</div>
        <div class="owl-footer__desc-wrapper desc">{{ registerNumber }}</div>
      </div>
    </div>
    <div class="owl-footer__copy">{{ copyRight }}</div>
  </footer>
</template>

<script>
import contents from "@/constants/common/footer.json";
import { lineBreak } from "@/utils/helper";
export default {
  props: {},
  data() {
    return {
      address: contents.address,
      name: contents.name,
      email: contents.email,
      contact: contents.contact,
      registerNumber: contents.registerNumber,
      copyRight: contents.copyRight,
    };
  },
  computed: {
    checkN() {
      return (str) => lineBreak(str);
    },
  },
};
</script>
<style lang="scss">
.owl-footer {
  width: 100%;
  height: 230px;
  $this: "owl-footer";
  .owl-footer-wrapper {
    @include flex-center-vert;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    border-top: 1px $scroll-border-color solid;
    padding: 0 283px 0 140px;
    @include mobile {
      padding: 50px 20px 20px 20px;
      flex-direction: column;
      height: auto;
      text-align: center;
      justify-content: center;
    }
    .#{$this}__logo-wrapper {
      width: 149px;
      @include mobile {
        margin: 0 0 30px 0;
      }
    }
    .#{$this}__contents-wrapper {
      min-height: 90px;
      max-height: 90px;
      @include flex-column;
      @include mobile {
        max-height: 100%;
        min-height: 1px;
        margin: 0 0 20px 0;
      }
      .#{$this}__desc-wrapper {
        @include set-text(400, 14, rgba($color: $color-footer, $alpha: 1));
        @include mobile {
          text-align: center;
        }
        &.desc {
          margin-top: 25px;
          @include mobile {
            margin: 0;
          }
        }
        .v-image {
          margin: 0 auto;
        }
      }
    }
  }
  .#{$this}__copy {
    @include flex-center;
    padding: 20px 0;
    @include set-text(400, 14, rgba($color: $color-footer, $alpha: 1));
    @include mobile {
      text-align: center;
    }
    &.desc {
      margin-top: 25px;
      @include mobile {
        margin: 0;
      }
    }
    .v-image {
      margin: 0 auto;
    }
  }
}
</style>
