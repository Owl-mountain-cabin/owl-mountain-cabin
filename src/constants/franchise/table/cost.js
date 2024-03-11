const Cost = {
  headers: [
    {
      text: "구분",
      align: "",
      value: "category",
      class: "w-20",
      sortable: false,
      filterable: false,
    },
    {
      text: "내역",
      align: "",
      value: "history",
      class: "w-35",
      sortable: false,
      filterable: false,
    },
    {
      text: "비용 (단위 : 만원) (VAT별도)",
      align: "",
      value: "price",
      class: "w-25 cost",
      sortable: false,
      filterable: false,
    },
    {
      text: "비고",
      align: "",
      value: "etc",
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
      category: "가맹비 (VAT별도)",
      history: "상표사용 허가권",
      price: "700",
      etc: "",
    },
    {
      category: "교육비 (VAT별도)",
      history: "오픈전 본사교육 • 직영교육 노하우 전수",
      price: "500",
      etc: "본사자체 교육장소 제공",
    },
    {
      category: "인테리어",
      history: "목공, 바닥, 천정, 벽면, 조명 등 내/외부 공사 일체",
      price: "13,500",
      etc: "평당 180만원",
    },
    {
      category: "주방기물/기릇",
      history: "냉장고 • 전판 • 간택기 외 홀 기물들",
      price: "2,500",
      etc: "선택적 중고가능",
    },
    {
      category: "사인 및 소품",
      history: "간판",
      price: "400",
      etc: "",
    },
    {
      category: "의탁자",
      history: "테이블, 의자 (30 Table)",
      price: "1,500",
      etc: "4인 1조 50만원",
    },
    {
      category: "온라인마케팅비",
      history: "전문가와의 1:1 마케팅 진행",
      price: "월 70",
      etc: "6개월 필수진행",
    },
    {
      category: "오픈초도비용",
      history: "유니폼 • 메뉴판 • 호출벨 등 홀 비품",
      price: "800",
      etc: "",
    },
    {
      category: "초도물류비용",
      history: "식자재",
      price: "500",
      etc: "",
    },
    {
      category: "합계",
      history: "",
      price: "20,460",
      etc: "",
    },
  ],
  customSlotInfo: [
    // { name: "status", slotName: "status" },
    // { name: "management", slotName: "management" },
  ],
};

export default Cost;
