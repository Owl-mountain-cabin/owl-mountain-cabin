<template>
  <appLayout>
    <cHeader />
    <v-main>
      <router-view></router-view>
    </v-main>
  </appLayout>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue";
import CHeader from "@/layouts/Header.vue";

export default {
  name: "App",
  components: {
    AppLayout,
    CHeader,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
