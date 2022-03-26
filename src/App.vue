<template>
  <div id="app">
    <header>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/menu">Menu</router-link>
      <router-link to="/store">Store</router-link>
      <router-link to="/franchise">Franchise</router-link>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="sass"></style>
