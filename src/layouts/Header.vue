<template>
  <header class="owl-header-wrapper">
    <div class="owl-header__logo-wrapper">
      <v-img
        contain
        :lazy-src="require(`@/assets/images/main-logo.svg`)"
        :src="require(`@/assets/images/main-logo.svg`)"
      />
    </div>
    <div class="owl-header__link-wrapper">
      <router-link to="/home">Home</router-link>
      <router-link to="/menu">Menu</router-link>
      <router-link to="/store">Store</router-link>
      <router-link to="/franchise">Franchise</router-link>
      <router-link to="/company">Company</router-link>
      <a href="https://www.naver.com" target="_blank">
        <div class="owl-header__image-wrapper">
          <v-img
            contain
            class="owl-header__image"
            :lazy-src="require(`@/assets/images/insta.svg`)"
            :src="require(`@/assets/images/insta.svg`)"
          />
        </div>
      </a>
      <div class="owl-header__phone">
        <v-img
          class="owl-header__phone-image"
          contain
          width="12px"
          :lazy-src="require(`@/assets/images/header-call.svg`)"
          :src="require(`@/assets/images/header-call.svg`)"
        />
        02-6080-4251
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {},
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
  padding: 0 140px;
  padding-top: 34px;
  z-index: 501;
  .#{$this}__logo-wrapper {
    width: 149px;
  }
  .#{$this}__link-wrapper {
    @include flex-center-vert();
    .router-link-exact-active {
      border-bottom: solid 3px $color-accent;
      @include set-text(400, 20, rgba($color: $color-accent, $alpha: 1));
    }
    a {
      text-decoration: none;
      margin-right: 45px;
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
  }
}
</style>
