<template>
  <div class="owl-store">
    <div class="owl-store__first-section">
      <Dimmed :height="'100%'" />
      <ImageWrapper :imageSrc="'store-header-image.webp'" title="STORE" />
    </div>
    <div class="owl-store__map-section">
      <Map :cordinate="getCordinate" @click="showStoreInfo" />
      <div class="owl-store__search-section">
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
            <v-tab> 지역검색 </v-tab>
            <v-tab> 매장찾기 </v-tab>
          </v-tabs>
        </div>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <div class="owl-store__tab-contents2-title">지역검색</div>
            <div class="owl-store__tab-contents2">
              <v-item-group :value="this.current">
                <v-row>
                  <v-col
                    v-for="(item, idx) in list"
                    :key="item.name"
                    cols="6"
                    md="2"
                    sm="2"
                    lg="6"
                  >
                    <v-item v-slot="{ active, toggle }">
                      <v-card
                        :color="active ? '#F0A30F' : ''"
                        class="d-flex align-center"
                        dark
                        height="50"
                        @click="handleTab(toggle, item.name)"
                      >
                        <v-scroll-y-transition>
                          <div
                            v-if="idx === 0 && index !== 0"
                            class="flex-grow-1 text-center"
                          >
                            뒤로
                          </div>
                          <div class="flex-grow-1 text-center">
                            {{ item.name }}
                          </div>
                        </v-scroll-y-transition>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-item-group>
            </div>
          </v-tab-item>
          <v-tab-item>
            <div class="owl-store__tab-contents2-title">매장찾기</div>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>
    <v-dialog
      v-model="dialog"
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <div v-if="Object.keys(content).length !== 0">
        <div class="owl-store__second-section">
          <SecondSection
            :title="content.second.title"
            :desc="content.second.desc"
            :address="content.second.address"
            :image="content.second.image"
          />
        </div>
        <div class="owl-store__third-section">
          <ThirdSection :images="content.third.images" />
        </div>
        <div class="owl-store__forth-section">
          <ForthSection :title="content.forth.title" />
        </div>
        <Banner :title="title" :desc="desc" />
      </div>
      <div
        v-if="Object.keys(content).length === 0"
        class="owl-store__second-empty-section"
      >
        <SecondEmptySection :title="emptyTitle" />
      </div>
    </v-dialog>
  </div>
</template>

<script>
import Dimmed from "@/components/Dimmed.vue";
import ImageWrapper from "@/components/ImageWrappers.vue";
import Map from "@/components/Map.vue";
import SecondSection from "@/features/store/SecondSection.vue";
import SecondEmptySection from "@/features/company/SecondSection.vue";
import ThirdSection from "@/features/store/ThirdSection.vue";
import ForthSection from "@/features/store/ForthSection.vue";
import Banner from "@/components/Banner.vue";
import contents from "@/constants/common/index.json";
import secondContents from "@/constants/store/second.json";
import { storeMeta } from "@/utils/meta/store";
import info from "@/constants/common/map.json";

export default {
  name: "Store",
  metaInfo: storeMeta,
  components: {
    Dimmed,
    ImageWrapper,
    SecondSection,
    SecondEmptySection,
    ThirdSection,
    ForthSection,
    Banner,
    Map,
  },
  mounted() {
    window.scrollTo(0, 0);
    this.init();
  },
  data() {
    return {
      title: contents.bannerTitle,
      desc: contents.phone,
      tab: "지역검색",
      current: "",
      location: "",
      originalList: [],
      list: [],
      name: "강남",
      content: {},
      index: 0,
      dialog: false,
      emptyTitle: "지역을 <span class='stressed'>선택</span>해주세요.",
    };
  },
  computed: {
    getCordinate() {
      return info[this.name];
    },
  },
  methods: {
    init() {
      const result = [...secondContents.data];
      this.originalList = [...result];
      this.list = [
        { name: "뒤로" },
        ...new Set(result.filter((item) => item.location === "서울")),
      ];
      this.current = result.findIndex((item) => item.name === "강남") + 1;
      this.location = "서울";
      this.content = result.find((item) => item.name === "강남");
      this.index = 1;
    },
    showStoreInfo(name) {
      setTimeout(() => {
        this.dialog = true;
      }, 1000);
      console.log("showStoreInfo", name);
    },
    handleTab(toggle, name) {
      // toggle && toggle();
      if (name === "뒤로") {
        this.handleBack();
        this.name = name;
        return;
      }

      if (this.index === 0) {
        console.log(name);
        this.handleTabFirstChange(name);
        this.name = name;
        return;
      }

      if (this.index === 1) {
        this.handleTabSecondChange(name);
        this.name = name;
        return;
      }
    },
    handleBack() {
      this.index -= 1;
      const result = [
        ...new Set(this.originalList.map((item) => item.location)),
      ];
      this.current = 0;
      this.list = [...result.map((item) => ({ name: item }))];
      this.location = "";
      this.content = {};
    },
    handleTabFirstChange(name) {
      this.index += 1;
      this.location = name;
      this.list = [
        { name: "뒤로" },
        ...this.originalList.filter((item) => item.location === name),
      ];
    },
    handleTabSecondChange(name) {
      const compare = this.originalList.filter(
        (item) => item.location === this.location
      );
      let current = compare.findIndex((item) => item.name === name);
      if (current === compare.length) {
        current = current - 1;
      } else {
        current = current + 1;
      }

      this.current = current;
      this.content = this.originalList.find((item) => item.name === name);
    },
  },
};
</script>

<style lang="scss">
.owl-store {
  $this: "owl-store";
  background: rgba($color: $color-primary, $alpha: 0.4);

  .#{$this}__section {
    height: 100vh;
  }
  .#{$this}__first-section {
    position: relative;
  }

  .#{$this}__map-section {
    padding-top: 20px;
    position: relative;
    .#{$this}__search-section {
      position: absolute;
      left: 80px;
      top: 80px;
      width: 400px;
      height: 700px;
      background: rgba($color: #ffffff, $alpha: 1);
      z-index: 100;
      @include box-shadow(0, 0, 10px, 0, rgba($color: black, $alpha: 0.4));

      .#{$this}__tab-section {
        padding: 0;
        @include desktop-small {
          padding: 100px 0;
        }
        @include tablet {
          padding: 80px 20px;
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
      .#{$this}__tab-contents2-title {
        width: 100%;
        padding: 40px 25px;
        margin-top: 5px;
        text-align: center;
        @include set-text(bold, 26, rgba($color: $color-title, $alpha: 0.7));
        background: rgba($color: $color-accent, $alpha: 1);
      }
      .#{$this}__tab-contents2 {
        padding: 25px;
        @include desktop-small {
          padding: 100px 25px;
        }
        @include tablet {
          padding: 80px 25px;
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
    }
  }
}

.v-dialog__content {
  z-index: 800 !important;
}

.v-dialog {
  background: rgba($color: #fff, $alpha: 1);
  max-width: 90%;
}

.owl-store__second-section {
  padding: 0 233px 0 329px;
  @include desktop-small {
    padding: 0 120px;
  }
  @include tablet {
    padding: 0 20px;
  }
}
.owl-store__second-empty-section {
  padding-bottom: 122px;
}

.owl-store__third-section {
  padding-top: 266px;
  padding-bottom: 199px;
  width: 500px;
  @include tablet {
    padding: 80px 0;
  }
}
.owl-store__forth-section {
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
</style>
