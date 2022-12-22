<template>
  <v-app class="owl-app-layout">
    <template v-slot:default>
      <slot name="default"></slot>
      <v-navigation-drawer
        class="owl-navi-wrapper"
        v-model="drawer"
        absolute
        right
      >
        <v-list nav>
          <v-list-item-group>
            <v-list-item class="owl-navi__list-item owl-navi__button-wrapper">
              <v-btn
                type="button"
                class="owl-navi--close"
                plain
                elevation="0"
                @click="onClickDrawer"
              >
                <v-icon color="#fff">$close</v-icon>
              </v-btn>
            </v-list-item>

            <v-list-item class="owl-navi__list-item">
              <v-list-item-title class="owl-navi__list-title">
                <router-link
                  active-class="owl-navi--active"
                  @click.native="onClickDrawer"
                  to="/home"
                >
                  Home
                </router-link>
              </v-list-item-title>
            </v-list-item>

            <v-list-item class="owl-navi__list-item">
              <v-list-item-title class="owl-navi__list-title">
                <router-link
                  active-class="owl-navi--active"
                  @click.native="onClickDrawer"
                  to="/menu"
                >
                  Menu
                </router-link>
              </v-list-item-title>
            </v-list-item>

            <v-list-item class="owl-navi__list-item">
              <v-list-item-title class="owl-navi__list-title">
                <router-link
                  active-class="owl-navi--active"
                  @click.native="onClickDrawer"
                  to="/store"
                >
                  Store
                </router-link>
              </v-list-item-title>
            </v-list-item>

            <v-list-item class="owl-navi__list-item">
              <v-list-item-title class="owl-navi__list-title">
                <router-link
                  active-class="owl-navi--active"
                  @click.native="onClickDrawer"
                  to="/franchise"
                >
                  Franchise
                </router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="owl-navi__list-item">
              <v-list-item-title class="owl-navi__list-title">
                <router-link
                  active-class="owl-navi--active"
                  @click.native="onClickDrawer"
                  to="/company"
                >
                  Company
                </router-link>
              </v-list-item-title>
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
  methods: {
    onClickDrawer() {
      this.drawer = false;
    },
    onClickToPage() {
      this.onClickDrawer();
    },
  },
};
</script>
<style lang="scss">
.owl-app-layout {
  max-width: 1920px;
  margin: 0 auto;
  background: $color-white !important;
  .owl-navi-wrapper {
    z-index: 999;
    width: 100% !important;
    background: $color-black !important;
    $this: "owl-navi";
    .#{$this}--active {
      background: transparent;
      color: $color-accent;
    }
    .#{$this}__list-item {
      text-align: center;
      &.#{$this}__button-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
      .#{$this}__list-title {
        padding: 21px 0;
        a {
          text-decoration: none;
          display: inline-block;
          width: 100%;
          @include set-text(400, 20, rgba($color: $color-white, $alpha: 1));
        }
      }
    }
  }
}
</style>
