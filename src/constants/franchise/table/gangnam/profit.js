const Profit = {
  headers: [
    {
      text: "구분",
      align: "",
      value: "category",
      class: "w-25",
      sortable: false,
      filterable: false,
    },
    {
      text: "금액",
      align: "",
      value: "price",
      class: "w-25",
      sortable: false,
      filterable: false,
    },
    {
      text: "백분율",
      align: "",
      value: "percentage",
      class: "w-20",
      sortable: false,
      filterable: false,
    },
  ],
  options: {
    hideFooter: true,
    hideHeader: false,
    dark: false,
    dense: true,
    disableFiltering: false,
    disablePagination: false,
    disableSort: false,
    fixedHeader: false,
    showSelect: false,
    itemKey: "category",
  },
  data: [
    {
      category: "총매출",
      price: "306,455,000원",
      percentage: "100%",
    },
    {
      category: "식재료",
      price: "55,398,600원",
      percentage: "18%",
    },
    {
      category: "주류비",
      price: "35,288,540원",
      percentage: "12%",
    },
    {
      category: "인건비",
      price: "61,291,000원",
      percentage: "20%",
    },
    {
      category: "월세/공과금",
      price: "39,839,150원",
      percentage: "13%",
    },
    {
      category: "부가세",
      price: "10,725,925원",
      percentage: "3.5%",
    },
    {
      category: "지출총액",
      price: "202,543,215원",
      percentage: "66%",
    },
    {
      category: "순이익",
      price: "103,911,785원",
      percentage: "34%",
    },
  ],
  customSlotInfo: [],
};

export default Profit;
