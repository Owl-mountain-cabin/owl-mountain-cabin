<template>
  <div class="owl-franchise-forth-wrapper">
    <div class="owl-franchise-forth__contents-wrapper" :class="[width]">
      <div class="owl-franchise-forth__title-wrapper" v-html="checkN(title)" />
      <div
        class="owl-franchise-forth__desc-wrapper"
        v-html="checkN(subTitle)"
      />
      <div class="owl-franchise-forth__address-wrapper" v-html="checkN(desc)" />
    </div>
    <div class="owl-franchise-forth__table-wrapper" :class="[width]">
      <DataTable
        :headers="data.headers"
        :datas="data.data"
        :options="data.options"
        :custom-slot-info="data.customSlotInfo"
      />
    </div>
  </div>
</template>

<script>
import DataTable from "@/components/DataTable.vue";
import { lineBreak } from "@/utils/helper";
export default {
  components: { DataTable },
  props: {
    width: {
      type: String,
      default: "w-50",
      description: "contents-width",
    },
    title: {
      type: String,
      default: "",
      description: "contents-title",
    },
    subTitle: {
      type: String,
      default: "",
      description: "contents-subTitle",
    },
    desc: {
      type: String,
      default: "",
      description: "contents-desc",
    },
    data: {
      type: Object,
      default: () => {},
      description: "contents-data",
    },
  },
  computed: {
    checkN() {
      return (str) => lineBreak(str);
    },
  },
};
</script>

<style lang="scss">
.owl-franchise-forth-wrapper {
  $this: "owl-franchise-forth";
  display: flex;
  justify-content: center;
  @include tablet {
    flex-direction: column;
  }
  .#{$this}__contents-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include tablet {
      width: 100% !important;
    }
    &.w-35 {
      width: 35%;
    }
    &.w-45 {
      width: 45%;
    }
    &.w-30 {
      width: 30%;
    }
    .#{$this}__title-wrapper {
      padding-bottom: 8px;
      @include set-text(
        400,
        35,
        rgba($color: $color-title, $alpha: 1),
        false,
        ture
      );
      @include tablet {
        font-size: 1.5rem;
        margin: 0;
        line-height: 1;
      }
    }
    .#{$this}__desc-wrapper {
      @include set-text(400, 30, rgba($color: $color-title, $alpha: 1));
      @include tablet {
        font-size: 0.9rem;
      }
    }
    .#{$this}__address-wrapper {
      padding-top: 93px;
      @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
      @include tablet {
        padding: 20px 0;
        font-size: 0.8rem;
        line-height: 1.7;
      }
      br {
        @include tablet {
          display: none;
        }
      }
    }
  }
  .#{$this}__table-wrapper {
    width: 50%;
    height: 100%;
    @include tablet {
      width: 100% !important;
    }
    &.w-35 {
      width: 65%;
    }
    &.w-45 {
      width: 55%;
    }
    &.w-30 {
      width: 70%;
    }
  }
}
</style>
