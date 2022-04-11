const Cost = {
  headers: [
    {
      text: "구분",
      align: "",
      value: "category",
      class: "w-20",
    },
    {
      text: "내역",
      align: "",
      value: "history",
      class: "w-40",
    },
    {
      text: "비용 (단위 : 만원)",
      align: "",
      value: "price",
      class: "w-20",
    },
    {
      text: "비고",
      align: "",
      value: "etc",
      class: "w-25",
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
      category: "가맹비",
      history: "상표사용 허가권",
      price: "700",
      etc: "",
    },
    {
      category: "교육비",
      history: "오픈전 본사교육 • 직영교육 노하우 전수",
      price: "500",
      etc: "본사자체 교육장소 제공",
    },
    {
      category: "인테리어",
      history: "목공, 바닥, 천정, 벽면, 조명 등 내/외부 공사 일체",
      price: "4000",
      etc: "평당 170만원",
    },
    {
      category: "주방기물/기릇",
      history: "냉장고 • 전판 • 간택기 외 홀 기물들",
      price: "800",
      etc: "선택적 중고가능",
    },
    {
      category: "사인 및 소품",
      history: "갈바간판, 원목간판, 고가구 소품",
      price: "300",
      etc: "",
    },
    {
      category: "의탁자",
      history: "테이블, 의자",
      price: "600",
      etc: "4인 1조 50만원",
    },
    {
      category: "온라인마케팅비",
      history: "전문가와의 1:1 마케팅 진행",
      price: "월 60",
      etc: "6개월 권장사항",
    },
    {
      category: "오픈초도비용",
      history: "유니폼 • 메뉴판 • 호출벨 등 홀 비품",
      price: "200",
      etc: "",
    },
    {
      category: "합계",
      history: "",
      price: "7100",
      etc: "",
    },
  ],
  customSlotInfo: [
    // { name: "status", slotName: "status" },
    // { name: "management", slotName: "management" },
  ],
};

export default Cost;
