<template>
  <div class="owl-store">
    <div class="owl-store__first-section">
      <Dimmed :height="'100%'" />
      <ImageWrapper :imageSrc="'store-header-image.webp'" title="STORE" />
    </div>
    <div class="owl-store__tab-section">
      <v-tabs
        show-arrows
        v-model="tab"
        fixed-tabs
        center-active
        centered
        color="#F0A30F"
      >
        <v-tabs-slider color="#F0A30F"></v-tabs-slider>
        <v-tab> 연신내점 </v-tab>
        <v-tab> 강남점 </v-tab>
        <v-tab> 의정부점 </v-tab>
        <v-tab> 신사점 </v-tab>
      </v-tabs>
    </div>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <div class="owl-store__second-section">
          <SecondSection
            :title="yeonsinnae.second.title"
            :desc="yeonsinnae.second.desc"
            :address="yeonsinnae.second.address"
            :image="yeonsinnae.second.image"
          />
        </div>
        <div class="owl-store__third-section">
          <ThirdSection :images="yeonsinnae.third.images" />
        </div>
        <div class="owl-store__forth-section">
          <ForthSection :title="yeonsinnae.forth.title" />
        </div>
        <Banner :title="title" :desc="desc" />
      </v-tab-item>
      <v-tab-item>
        <div class="owl-store__second-section">
          <SecondSection
            :title="gangnam.second.title"
            :desc="gangnam.second.desc"
            :address="gangnam.second.address"
            :image="gangnam.second.image"
          />
        </div>
        <div class="owl-store__third-section">
          <ThirdSection :images="gangnam.third.images" />
        </div>
        <div class="owl-store__forth-section">
          <ForthSection :title="gangnam.forth.title" />
        </div>
        <Banner :title="title" :desc="desc" />
      </v-tab-item>
      <v-tab-item>
        <div class="owl-store__second-section">
          <SecondSection
            :title="uijeongbu.second.title"
            :desc="uijeongbu.second.desc"
            :address="uijeongbu.second.address"
            :image="uijeongbu.second.image"
          />
        </div>
        <div class="owl-store__third-section">
          <ThirdSection :images="uijeongbu.third.images" />
        </div>
        <div class="owl-store__forth-section">
          <ForthSection :title="uijeongbu.forth.title" />
        </div>
        <Banner :title="title" :desc="desc" />
      </v-tab-item>
      <v-tab-item>
        <div class="owl-store__second-section">
          <SecondSection
            :title="sinsa.second.title"
            :desc="sinsa.second.desc"
            :address="sinsa.second.address"
            :image="sinsa.second.image"
          />
        </div>
        <div class="owl-store__third-section">
          <ThirdSection :images="sinsa.third.images" />
        </div>
        <div class="owl-store__forth-section">
          <ForthSection :title="sinsa.forth.title" />
        </div>
        <Banner :title="title" :desc="desc" />
      </v-tab-item>
    </v-tabs-items>
    <Map
      :latitude="getCordinate['latitude']"
      :longitude="getCordinate['longitude']"
    />
  </div>
</template>

<script>
import Dimmed from "@/components/Dimmed.vue";
import ImageWrapper from "@/components/ImageWrappers.vue";
import Map from "@/components/Map.vue";
import SecondSection from "@/features/store/SecondSection.vue";
import ThirdSection from "@/features/store/ThirdSection.vue";
import ForthSection from "@/features/store/ForthSection.vue";
import Banner from "@/components/Banner.vue";
import contents from "@/constants/common/index.json";
import secondContents from "@/constants/store/second.json";
import forthContents from "@/constants/store/forth.json";
import { storeMeta } from "@/utils/meta/store";
import info from "@/constants/common/map.json";

export default {
  name: "Store",
  metaInfo: storeMeta,
  components: {
    Dimmed,
    ImageWrapper,
    SecondSection,
    ThirdSection,
    ForthSection,
    Banner,
    Map,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      title: contents.bannerTitle,
      desc: contents.phone,
      tab: "연신내점",
      gangnam: {
        second: {
          title: secondContents["GANGNAM"].title,
          desc: secondContents["GANGNAM"].desc,
          address: secondContents["GANGNAM"].address,
          image: "store-gangnam-second1.webp",
        },
        third: {
          images: [
            "store-gangnam-slide1.webp",
            "store-gangnam-slide2.webp",
            "store-gangnam-slide3.webp",
            "store-gangnam-slide4.webp",
            "store-gangnam-slide5.webp",
            "store-gangnam-slide6.webp",
          ],
        },
        forth: {
          title: forthContents["GANGNAM"].title,
        },
      },
      yeonsinnae: {
        second: {
          title: secondContents["YEONSINNAE"].title,
          desc: secondContents["YEONSINNAE"].desc,
          address: secondContents["YEONSINNAE"].address,
          image: "store-yeonsin-second1.webp",
        },
        third: {
          images: [
            "store-yeonsin-slide1.webp",
            "store-yeonsin-slide2.webp",
            "store-yeonsin-slide3.webp",
          ],
        },
        forth: {
          title: forthContents["YEONSINNAE"].title,
        },
      },
      uijeongbu: {
        second: {
          title: secondContents["UIJEONGBU"].title,
          desc: secondContents["UIJEONGBU"].desc,
          address: secondContents["UIJEONGBU"].address,
          image: "store-uijeongbu-second1.webp",
        },
        third: {
          images: [
            "store-uijeongbu-slide1.webp",
            "store-uijeongbu-slide2.webp",
            "store-uijeongbu-slide3.webp",
            "store-uijeongbu-slide4.webp",
            "store-uijeongbu-slide5.webp",
          ],
        },
        forth: {
          title: forthContents["UIJEONGBU"].title,
        },
      },
      sinsa: {
        second: {
          title: secondContents["SINSA"].title,
          desc: secondContents["SINSA"].desc,
          address: secondContents["SINSA"].address,
          image: "store-sinsa-second1.webp",
        },
        third: {
          images: [
            "store-sinsa-slide1.webp",
            "store-sinsa-slide2.webp",
            "store-sinsa-slide3.webp",
            "store-sinsa-slide4.webp",
          ],
        },
        forth: {
          title: forthContents["SINSA"].title,
        },
      },
    };
  },
  computed: {
    getCordinate() {
      switch (this.tab) {
        case 0:
          return {
            latitude: info.yeonsinnae.latitude,
            longitude: info.yeonsinnae.longitude,
          };
        case 1:
          return {
            latitude: info.gangnam.latitude,
            longitude: info.gangnam.longitude,
          };
        case 2:
          return {
            latitude: info.uijeongbu.latitude,
            longitude: info.uijeongbu.longitude,
          };
        case 3:
          return {
            latitude: info.sinsa.latitude,
            longitude: info.sinsa.longitude,
          };
        default:
          return {
            latitude: info.yeonsinnae.latitude,
            longitude: info.yeonsinnae.longitude,
          };
      }
    },
  },
};
</script>

<style lang="scss">
.owl-store {
  $this: "owl-store";

  .#{$this}__tab-section {
    padding: 122px 0;
    @include desktop-small {
      padding: 100px 0;
    }
    @include tablet {
      padding: 80px 0;
    }
    .v-tab {
      @include set-text(400, 16, rgba($color: $color-footer, $alpha: 1));
      @include tablet {
        border-bottom: 2px solid #ddd;
        font-size: 0.8rem;
      }
      &.v-tab--active {
        color: $color-accent;
        font-weight: 600;
      }
    }
  }
  .#{$this}__section {
    height: 100vh;
  }
  .#{$this}__first-section {
    position: relative;
  }
  .#{$this}__second-section {
    padding: 0 233px 0 329px;
    @include desktop-small {
      padding: 0 120px;
    }
    @include tablet {
      padding: 0 20px;
    }
  }
  .#{$this}__third-section {
    padding-top: 266px;
    padding-bottom: 199px;
    @include tablet {
      padding: 80px 0;
    }
  }
  .#{$this}__forth-section {
    padding-top: 155px;
    padding-bottom: 155px;
    background: rgba($color: #edede5, $alpha: 0.4);
    @include desktop-small {
      padding: 155px 0 200px 0;
    }
    @include tablet {
      padding: 50px 0;
    }
  }
}
</style>
