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
    {
      text: "비고",
      align: "",
      value: "etc",
      class: "w-30",
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
      price: "186,973,500원",
      percentage: "100%",
      etc: "메뉴매출 120,523,000원\n주류매출 66,450,500원",
    },
    {
      category: "식재료",
      price: "36,156,900원",
      percentage: "19%",
      etc: "식재료 코스트 30%",
    },
    {
      category: "주류비",
      price: "18,606,140원",
      percentage: "10%",
      etc: "주류 코스트 28%",
    },
    {
      category: "인건비",
      price: "35,933,377원",
      percentage: "19%",
      etc: "",
    },
    {
      category: "월세/공과금",
      price: "18,792,940원",
      percentage: "10%",
      etc: "월세 15,400,000원",
    },
    {
      category: "부가세",
      price: "6,544,073원",
      percentage: "3.5%",
      etc: "",
    },
    {
      category: "지출총액",
      price: "116,033,430원",
      percentage: "62%",
      etc: "",
    },
    {
      category: "순이익",
      price: "70,940,071원",
      percentage: "38%",
      etc: "",
    },
  ],
  customSlotInfo: [
    // { name: "status", slotName: "status" },
    // { name: "management", slotName: "management" },
  ],
};

export default Profit;
