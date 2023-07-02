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
      price: "95,012,500원",
      percentage: "100%",
    },
    {
      category: "식재료",
      price: "17,609,250원",
      percentage: "19%",
    },
    {
      category: "주류비",
      price: "10,165,400원",
      percentage: "11%",
    },
    {
      category: "인건비",
      price: "20,902,750원",
      percentage: "22%",
    },
    {
      category: "월세/공과금",
      price: "5,700,750원",
      percentage: "6%",
    },
    {
      category: "부가세",
      price: "3,325,438원",
      percentage: "3.5%",
    },
    {
      category: "지출총액",
      price: "57,703,588원",
      percentage: "49%",
    },
    {
      category: "순이익",
      price: "37,308,913원",
      percentage: "39%",
    },
  ],
  customSlotInfo: [],
};

export default Profit;
