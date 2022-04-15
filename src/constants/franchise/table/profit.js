const Profit = {
  headers: [
    {
      text: "구분",
      align: "",
      value: "category",
      class: "w-33",
      sortable: false,
      filterable: false,
    },
    {
      text: "금액",
      align: "",
      value: "price",
      class: "w-33",
      sortable: false,
      filterable: false,
    },
    {
      text: "비고",
      align: "",
      value: "etc",
      class: "w-33",
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
      price: "77,119,500원",
      etc: "배달매출\n 11,938,800원",
    },
    {
      category: "식자재비",
      price: "16,084,792원",
      etc: "",
    },
    {
      category: "인건비",
      price: "17,779,771원",
      etc: "",
    },
    {
      category: "주류비",
      price: "6,260,000원",
      etc: "",
    },
    {
      category: "월세/공과금",
      price: "3,674,200원",
      etc: "월세\n 2,500,000원",
    },
    {
      category: "부가세 및 운영비",
      price: "3,217,323원",
      etc: "",
    },
    {
      category: "지출총액",
      price: "45,345,086원",
      etc: "",
    },
    {
      category: "순이익",
      price: "30,103,414원",
      etc: "순마진율 39%",
    },
  ],
  customSlotInfo: [
    // { name: "status", slotName: "status" },
    // { name: "management", slotName: "management" },
  ],
};

export default Profit;
