<template>
  <div class="text-center">
    <v-dialog v-model="popupVisible" hide-overlay>
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
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Popup",
  data() {
    return {
      popupVisible: false,
    };
  },
  mounted() {
    if (!this.checkMobile()) {
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
        this.popupVisible = true;
      }
    }
  },
  methods: {
    checkMobile() {
      const user = navigator.userAgent;
      let isCheck = false;

      if (
        user.indexOf("iPhone") > -1 ||
        user.indexOf("Android") > -1 ||
        user.indexOf("iPad") > -1 ||
        user.indexOf("iPod") > -1
      ) {
        isCheck = true;
      }

      return isCheck;
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
  background: #fff;
  height: 100%;
  width: 100%;
}
.v-dialog {
  width: 515px !important;
  height: 770px;
  @include desktop-small {
    width: 515px !important;
  }
  @include mobile {
    width: 300px !important;
  }
}
.v-dialog__content {
  z-index: 999 !important;
  justify-content: flex-start !important;
}
</style>
