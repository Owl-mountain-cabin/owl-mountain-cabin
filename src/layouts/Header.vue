<template>
  <header class="owl-header-wrapper">
    <div class="owl-center-wrapper owl-flex-wrapper">
      <div class="owl-header__logo-wrapper">
        <v-img
          contain
          lazy-src="https://res.cloudinary.com/dexj7izei/image/upload/v1671708933/main-logo_jplvvr.svg"
          src="https://res.cloudinary.com/dexj7izei/image/upload/v1671708933/main-logo_jplvvr.svg"
        />
      </div>
      <div class="owl-header__link-wrapper">
        <router-link class="desktop" to="/home">Home</router-link>
        <router-link class="desktop" to="/menu">Menu</router-link>
        <router-link class="desktop" to="/store">Store</router-link>
        <router-link class="desktop" to="/franchise">Franchise</router-link>
        <router-link class="desktop" to="/company">Company</router-link>
        <a
          title="mobile"
          class="mobile"
          href="https://www.instargram.com/owl_mt_cabin"
          target="_blank"
        >
          <div class="owl-header__image-wrapper">
            <v-img
              contain
              class="owl-header__image"
              lazy-src="https://res.cloudinary.com/dexj7izei/image/upload/v1671708931/insta_irpwlj.svg"
              src="https://res.cloudinary.com/dexj7izei/image/upload/v1671708931/insta_irpwlj.svg"
            />
          </div>
        </a>
        <v-btn
          type="button"
          class="mobile"
          plain
          elevation="0"
          @click="onClickDrawer"
        >
          <v-icon color="#fff">$menu</v-icon>
        </v-btn>
        <div class="owl-header__phone desktop">
          <v-img
            class="owl-header__phone-image"
            contain
            width="12px"
            lazy-src="https://res.cloudinary.com/dexj7izei/image/upload/v1671708928/header-call_n6epuy.svg"
            src="https://res.cloudinary.com/dexj7izei/image/upload/v1671708928/header-call_n6epuy.svg"
          />
          1566-8107
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {},
  inject: ["my"],
  methods: {
    onClickDrawer() {
      this.my.drawer = true;
    },
  },
};
</script>
<style lang="scss">
.owl-header-wrapper {
  $this: "owl-header";
  position: absolute;
  top: 0;
  width: 100%;
  @include flex-center-vert();
  justify-content: space-between;
  //padding: 0 140px;
  padding-top: 34px;
  z-index: 501;
  @include tablet {
    width: 100%;
    padding: 30px 20px 0;
  }
  .#{$this}__logo-wrapper {
    width: 149px;
  }
  .#{$this}__link-wrapper {
    @include flex-center-vert();
    .mobile {
      display: none;
    }

    .router-link-exact-active {
      border-bottom: solid 3px $color-accent;
      @include set-text(400, 20, rgba($color: $color-accent, $alpha: 1));
    }
    a {
      text-decoration: none;
      margin-right: 45px;
      @include tablet {
        margin-right: 0;
      }
      @include set-text(400, 20, rgba($color: #fff, $alpha: 1));
      @include transition(color 0.5s ease-in);
      &:after {
        display: block;
        content: "";
        border-bottom: solid 3px $color-accent;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        transform-origin: 0% 50%;
      }
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        color: rgba($color: $color-accent, $alpha: 1);
      }
      &:hover:after {
        transform: scaleX(1);
      }
    }
    button.v-btn {
      padding-right: 0;
      min-width: 1px;
    }
    .#{$this}__image-wrapper {
      .#{$this}__image {
        width: 100%;
        height: 100%;
        @include cover-background;
      }
    }

    .#{$this}__phone {
      @include flex-center-vert();
      @include set-text(400, 15, rgba($color: #fff, $alpha: 1));
      .#{$this}__phone-image {
        margin-right: 8px;
      }
    }
    // 모바일인 경우
    @include tablet {
      .desktop {
        display: none;
      }
      .mobile {
        display: block;
      }
    }
  }

  .owl-flex-wrapper {
    justify-content: space-between;
  }
}
</style>
