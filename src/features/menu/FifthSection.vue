<template>
  <div class="owl-menu-fifth-wrapper">
    <div
      class="owl-menu-fifth__contents-wrapper"
      v-for="(item, index) in summary"
      :key="index"
    >
      <div class="owl-menu-fifth__title-wrapper">
        {{ item.title }}
      </div>
      <div class="owl-menu-fifth__image-wrapper">
        <ImageRowBox :images="item.images" :width="item.width" />
      </div>
    </div>
  </div>
</template>

<script>
import contents from "@/constants/menu/fifth.json";
import ImageRowBox from "@/components/ImageRowBox.vue";
export default {
  components: {
    ImageRowBox,
  },
  data() {
    return {
      summary: contents.summary,
    };
  },
};
</script>

<style lang="scss">
.owl-menu-fifth-wrapper {
  $this: "owl-menu-fifth";
  width: 100%;
  @include tablet {
    margin-bottom: 80px;
  }
  .#{$this}__contents-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 47px;
    &:first-child {
      margin-top: 0;
    }
    .#{$this}__title-wrapper {
      @include set-text(
        400,
        30,
        rgba($color: $color-title, $alpha: 1),
        false,
        true
      );
      width: 1600px;
      margin: 0 auto;
      @include desktop-medium {
        width: 100%;
        padding: 0 40px;
      }
      @include desktop-small {
        width: 100%;
        padding: 0 40px;
      }
      @include tablet {
        width: 100%;
        padding: 0 20px;
      }
    }
    .#{$this}__image-wrapper {
      width: 100%;
      margin-top: 23px;
      background: #f8f8f5;
      @include rounded(10px);
      padding: 33px 20px;
      @include tablet {
        padding: 20px 20px 50px 20px;
      }
    }
  }
}
</style>
