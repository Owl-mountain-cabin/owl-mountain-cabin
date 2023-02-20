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
      class: "w-25",
      sortable: false,
      filterable: false,
    },
    {
      text: "비고",
      align: "",
      value: "etc",
      class: "w-25",
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
      price: "82,563,500원",
      percentage: "100%",
      etc: "메뉴매출 55,611,500원\n주류매출 26,952,000원",
    },
    {
      category: "식재료",
      price: "16,683,450원",
      percentage: "20%",
      etc: "식재료 코스트 30%",
    },
    {
      category: "주류비",
      price: "7,546,560원",
      percentage: "9%",
      etc: "주류 코스트 28%",
    },
    {
      category: "인건비",
      price: "20,198,994원",
      percentage: "24%",
      etc: "",
    },
    {
      category: "월세/공과금",
      price: "5,506,240원",
      percentage: "7%",
      etc: "월세 2,500,000원",
    },
    {
      category: "부가세",
      price: "2,889,723원",
      percentage: "3.5%",
      etc: "",
    },
    {
      category: "지출총액",
      price: "116,033,430원",
      percentage: "64%",
      etc: "",
    },
    {
      category: "순이익",
      price: "29,738,534원",
      percentage: "36%",
      etc: "",
    },
  ],
  customSlotInfo: [
    // { name: "status", slotName: "status" },
    // { name: "management", slotName: "management" },
  ],
};

export default Profit;
