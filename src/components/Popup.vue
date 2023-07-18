<template>
  <div v-if="popupVisible">
    <div class="owl-popup-wrapper">
      <img src="https://www.owlmtcabin-official.com/image/income.webp" />
      <div style="width: 100%; display: flex">
        <input
          type="checkbox"
          @click="closePopup"
          style="
            text-align: right;
            width: 30px;
            margin: 3px 0;
            margin-left: 3px;
          "
        />
        오늘 하루 이창 열지 않음
      </div>
    </div>
  </div>
</template>

<script>
function copyStyles(sourceDoc, targetDoc) {
  Array.from(sourceDoc.styleSheets).forEach((styleSheet) => {
    if (styleSheet.cssRules) {
      const newStyleEl = sourceDoc.createElement("style");

      Array.from(styleSheet.cssRules).forEach((cssRule) => {
        newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
      });

      targetDoc.head.appendChild(newStyleEl);
    } else if (styleSheet.href) {
      const newLinkEl = sourceDoc.createElement("link");

      newLinkEl.rel = "stylesheet";
      newLinkEl.href = styleSheet.href;
      targetDoc.head.appendChild(newLinkEl);
    }
  });
}

export default {
  name: "Popup",
  data() {
    return {
      popupVisible: true,
    };
  },
  mounted() {
    if (!this.isMobile()) {
      // 로컬 스토리지에서 팝업 상태 확인 및 만료 확인
      const popupState = localStorage.getItem("popupState");
      const expiration = localStorage.getItem("popupExpiration");
      const today = new Date().toISOString().split("T")[0];
      if (popupState === "closed" && expiration && expiration <= today) {
        // 팝업이 닫혀야 할 시간이 지났으면 상태 초기화
        localStorage.removeItem("popupState");
        localStorage.removeItem("popupExpiration");
        this.popupVisible = true;
      } else if (popupState === "closed" && expiration && expiration > today) {
        this.popupVisible = false;
      } else {
        this.getNoticePopup();
      }
    }
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
    getNoticePopup() {
      const width = 515;
      const height = 737;
      const top = 0;
      const left = 0;

      this.windowRef = window.open(
        "",
        "",
        `width=${width}, height=${height}, top=${top}, left=${left}`
      );
      this.windowRef.document.body.style = "margin: 0px";
      this.windowRef.document.body.appendChild(this.$el);
      copyStyles(window.document, this.windowRef.document);
      this.windowRef.addEventListener("beforeunload", this.closePopup);
    },
    closePopup() {
      // 로컬 스토리지에서 팝업 상태 확인
      const popupState = localStorage.getItem("popupState");
      if (popupState === "closed") {
        return; // 이미 닫혔으면 아무 작업도 하지 않음
      }

      // 팝업 열기
      this.popupVisible = false;

      // 로컬 스토리지에 팝업 상태 저장 (하루 동안 유지)
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      localStorage.setItem("popupState", "closed");
      localStorage.setItem("popupExpiration", tomorrow.toISOString());
    },
  },
};
</script>
<style lang="scss">
.owl-popup-wrapper {
  $this: "owl-popup";
}
</style>
