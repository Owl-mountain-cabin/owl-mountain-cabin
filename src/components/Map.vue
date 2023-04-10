<template>
  <div id="map" class="owl-map-wrapper"></div>
</template>

<script>
export default {
  props: {
    cordinate: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      map: null,
      markers: [],
      imageSrc:
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
    };
  },

  mounted() {
    if (window.kakao && window.kakao.maps) {
      // 카카오 객체가 있고, 카카오 맵그릴 준비가 되어 있다면 맵 실행
      this.loadMap();
    } else {
      // 없다면 카카오 스크립트 추가 후 맵 실행
      this.loadScript();
    }
  },
  watch: {
    cordinate: {
      handler() {
        if (this.map) {
          this.updateLocation();
        }
      },
      immediate: true,
    },
  },
  methods: {
    resetMarker() {
      if (this.markers.length > 0) {
        this.markers.forEach((item) => {
          window.kakao.maps.event.removeListener(
            item,
            "click",
            this.handlerCallback
          );
          item.setMap(null);
        });
      }
    },
    handlerCallback(title) {
      this.$emit("click", title);
    },
    updateLocation() {
      this.resetMarker();
      this.cordinate.forEach((item) => {
        const markerPosition = new window.kakao.maps.LatLng(
          item.latitude,
          item.longitude
        );

        const imageSize = new window.kakao.maps.Size(24, 35);
        const markerImage = new window.kakao.maps.MarkerImage(
          this.imageSrc,
          imageSize
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
          title: item.title,
        });

        window.kakao.maps.event.addListener(marker, "click", () =>
          this.handlerCallback(item.title)
        );

        this.map.setCenter(markerPosition);
        marker.setMap(this.map);
        this.markers.push(marker);
      });
    },
    loadScript() {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VUE_APP_KAKAO_MAP}&autoload=false`; // &autoload=false api를 로드한 후 맵을 그리는 함수가 실행되도록 구현
      script.onload = () => window.kakao.maps.load(this.loadMap); // 스크립트 로드가 끝나면 지도를 실행될 준비가 되어 있다면 지도가 실행되도록 구현
      document.head.appendChild(script); // html>head 안에 스크립트 소스를 추가
    },
    loadMaker(latitude, longitude, title) {
      // 마커가 표시 위치
      const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);

      const imageSize = new window.kakao.maps.Size(24, 35);
      const markerImage = new window.kakao.maps.MarkerImage(
        this.imageSrc,
        imageSize
      );
      // 마커 생성
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
        title,
      });

      window.kakao.maps.event.addListener(marker, "click", () =>
        this.handlerCallback(title)
      );

      // 마커가 지도 위에 표시되도록 설정
      marker.setMap(this.map);

      this.markers.push(marker);
    },
    loadMap() {
      const container = document.getElementById("map"); // 지도를 담을 DOM 영역

      this.cordinate.forEach((item) => {
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(item.latitude, item.longitude), // 지도의 중심좌표
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        this.map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        this.loadMaker(item.latitude, item.longitude, item.title); // 지도가 로드되면서 마커가 생성되도록 함수 추가
      });
    },
  },
};
</script>

<style lang="scss">
.owl-map-wrapper {
  width: 100%;
  height: 800px;
  $this: "owl-map";
  @include tablet {
    height: 400px;
  }
  .#{$this}__background-wrapper {
    @include tablet {
      height: 400px;
    }
    .v-image {
      @include tablet {
        height: 400px;
      }
      .v-image__image {
        @include tablet {
          background-size: cover;
        }
      }
    }
    .#{$this}__background {
      @include cover-background;
      @include tablet {
        height: 400px;
      }
    }
  }
}
</style>
