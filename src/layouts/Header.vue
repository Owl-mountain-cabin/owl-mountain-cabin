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
      <router-link to="/about">About</router-link>
      <router-link to="/menu">Menu</router-link>
      <router-link to="/store">Store</router-link>
      <router-link to="/franchise">Franchise</router-link>
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
  }
}
</style>
