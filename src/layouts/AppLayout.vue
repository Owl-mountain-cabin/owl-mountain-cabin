<template>
  <v-app class="owl-app-layout">
    <template v-slot:default>
      <slot name="default"></slot>
      <v-navigation-drawer class="owl-navi-wrapper" v-model="drawer" absolute>
        <v-list nav>
          <v-list-item-group>
            <v-list-item
              active-class="owl-navi--active"
              class="owl-navi__list-item"
            >
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>

            <v-list-item
              active-class="owl-navi--active"
              class="owl-navi__list-item"
            >
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>

            <v-list-item
              active-class="owl-navi--active"
              class="owl-navi__list-item"
            >
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item
              active-class="owl-navi--active"
              class="owl-navi__list-item"
            >
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </template>
  </v-app>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      drawer: false,
    };
  },
  provide() {
    const my = {};
    Object.defineProperty(my, "drawer", {
      enumerable: true,
      get: () => this.drawer,
      set: (value) => {
        this.drawer = value;
      },
    });
    return { my };
  },
};
</script>
<style lang="scss">
.owl-app-layout {
  max-width: 1920px;
  margin: 0 auto;
  background: #ffffff !important;
  .owl-navi-wrapper {
    z-index: 999;
    width: 100% !important;
    $this: "owl-navi";
    .#{$this}--active {
      background: transparent;
      color: $color-accent;
    }
    .#{$this}__list-item {
      text-align: center;
    }
  }
}
</style>
