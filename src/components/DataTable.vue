<template>
  <v-data-table
    class="owl-data-table"
    :checkbox-color="optionsProp['checkbox-color']"
    :hide-default-footer="optionsProp['hide-default-footer']"
    :hide-default-header="optionsProp['hide-default-header']"
    :show-select="optionsProp['show-select']"
    :item-key="optionsProp['item-key']"
    :headers="headers"
    :items="datas"
  >
    <template
      v-for="info in customSlotInfo"
      v-slot:[`item.${info.slotName}`]="{ item }"
    >
      <slot :name="`${info.name}_custom`" :item="item" />
    </template>
    <template v-if="isCustomBody" v-slot:item="{ item }">
      <slot name="body" :item="item" />
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: () => [],
      description: "테이블 헤더",
    },
    datas: {
      type: Array,
      default: () => [],
      description: "테이블 데이터",
    },
    selectedItems: {
      type: Array,
      default: () => [],
      description: "선택된 테이블 데이터",
    },
    search: {
      type: String,
      default: undefined,
      description: "검색 값",
    },
    options: {
      type: Object,
      default: () => {},
      description: "테이블 옵션",
    },
    customSlotInfo: {
      type: Array,
      default: () => [],
      description: "커스텀 슬롯 정보",
    },
    itemsPerPage: {
      type: Number,
      default: 10,
      description: "한 테이블에 출력될 데이터 갯수",
    },
    isCustomBody: {
      type: Boolean,
      default: false,
      description: "커스텀 바디 여부",
    },
    scrollOnly: {
      type: Boolean,
      default: false,
      description:
        "Pagination을 없애고 스크롤로 테이블의 내용을 확인하도록 변경 / rowsPerPage Props는 해당 데이터의 length 값으로 지정",
    },
    isLinked: {
      type: Boolean,
      default: false,
      description: "연결할 path 값 유무",
    },
  },
  data: () => ({
    selected: [],
    page: 1,
    pageCount: 0,
    isOpenTooltipId: false,
    paddingWidth: 16,
  }),
  computed: {
    optionsProp() {
      return {
        "hide-default-footer": this.options.hideFooter,
        "hide-default-header": this.options.hideHeader,
        dark: this.options.dark,
        dense: this.options.dense,
        "disable-filtering": this.options.disableFiltering,
        "disable-pagination": this.options.disablePagination,
        "disable-sort": this.options.disableSort,
        "fixed-header": this.options.fixedHeader,
        "show-select": this.options.showSelect,
        "item-key": this.options.itemKey,
      };
    },
  },
};
</script>

<style lang="scss">
.owl-data-table {
  table {
    table-layout: fixed;
  }
  .v-data-table__wrapper {
    thead {
      background-color: $color-white;
      tr {
        th {
          &.w-0 {
            display: none;
          }
          &.w-5 {
            width: 5%;
          }
          &.w-10 {
            width: 10%;
          }
          &.w-20 {
            width: 20%;
          }
          &.w-25 {
            width: 25%;
          }
          &.w-30 {
            width: 30%;
          }
          &.w-33 {
            width: 33%;
          }
          &.w-40 {
            width: 40%;
          }
          &.w-50 {
            width: 50%;
          }
          &.w-60 {
            width: 60%;
          }
          &.w-70 {
            width: 70%;
          }
          &.w-80 {
            width: 80%;
          }
          &.w-90 {
            width: 90%;
          }
          &.w-100 {
            width: 100%;
          }
          height: 67px !important;
          @include set-text(bold, 20, rgba($color: $color-title, $alpha: 1));
          border-bottom: 1px solid rgba($color: $color-accent, $alpha: 1) !important;
          border-top: 1px solid rgba($color: $color-accent, $alpha: 1) !important;
          border-right: 1px solid rgba($color: $color-border, $alpha: 1) !important;
          padding: 0 60px !important;
          &:last-child {
            border-right: none !important;
          }
        }
      }
    }
    tbody {
      tr {
        &:nth-child(odd) {
          background-color: $color-white;
        }

        &:nth-child(even) {
          background-color: $color-white;
        }
        td {
          height: 67px !important;
          @include set-text(400, 20, rgba($color: $color-desc, $alpha: 1));
          border-bottom: 1px solid rgba($color: $color-border, $alpha: 1) !important;
          border-right: 1px solid rgba($color: $color-border, $alpha: 1) !important;
          padding: 0 60px !important;
          &:last-child {
            border-right: none !important;
          }
        }
      }
    }
  }
}
</style>
