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
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba($color: #000, $alpha: 0.5);
  .#{$this}__logo-wrapper {
  }

  .#{$this}__link-wrapper {
  }
}
</style>
