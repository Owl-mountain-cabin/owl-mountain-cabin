<template>
  <v-app class="owl-app-layout">
    <template v-slot:default>
      <slot name="default"></slot>
    </template>
  </v-app>
</template>

<script>
export default {
  props: {},
};
</script>
<style lang="scss">
.owl-app-layout {
  max-width: 1920px;
  margin: 0 auto;
  background: #ffffff !important;
}
</style>
