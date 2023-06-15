<!-- eslint-disable vue/no-v-model-argument -->
<template>
  <div class="owl-store">
    <div class="owl-store__first-section">
      <Dimmed :height="'100%'" />
      <ImageWrapper :imageSrc="'store-header-image.webp'" title="STORE" />
    </div>
    <div class="owl-store__map-section">
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
            <div class="owl-store__tab-contents2-title">
              지역검색
              <div class="owl-store__tab-contents2-info">
                부엉이 아이콘을 클릭 하시면 지점별 정보를 보실 수 있습니다.
              </div>
            </div>
            <div class="owl-store__tab-contents2">
              <v-item-group :value="this.current">
                <v-row>
                  <v-col
                    v-for="(item, idx) in list"
                    :key="item.name"
                    cols="6"
                    md="6"
                    sm="6"
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
            <v-autocomplete
              autofocus
              class="owl-store__search"
              aria-placeholder="매장명을 입력해주세요."
              label="매장명을 입력해주세요."
              hide-no-data
              hide-details
              active
              color="#F0A30F"
              :items="[
                '연신내',
                '강남',
                '신사',
                '한양대',
                '강남지오다노',
                '의정부',
                '송도',
                '인하대',
                '서현',
                '광주첨단',
              ]"
              v-model="select"
              v-model:search="search"
            />
            <div class="owl-store__tab-image-section" v-if="images.length">
              <ThirdSection :images="images" effect="" />
            </div>
          </v-tab-item>
        </v-tabs-items>
      </div>
      <Map :cordinate="getCordinate" @click="showStoreInfo" />
    </div>
    <v-dialog
      v-model="dialog"
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <v-toolbar dark color="#F6F4EE">
        <v-btn
          class="owl-store__dialog-close-btn"
          icon
          dark
          @click="dialog = false"
        >
          <v-icon color="#000000">mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
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
          <ThirdSection :images="content.third.images" effect="coverflow" />
        </div>
        <div class="owl-store__forth-section">
          <ForthSection :title="content.forth.title" />
        </div>
      </div>
    </v-dialog>
    <Banner :title="title" :desc="desc" v-if="!dialog" />
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
import { storeMeta } from "@/utils/meta/store";
import mapInfo from "@/constants/common/map.json";
import branches from "@/constants/common/branches.json";

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

      search: null,
      select: null,
      images: [],
      branches: branches.branches,
    };
  },
  computed: {
    getCordinate() {
      return mapInfo[this.name];
    },
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
    tab(val) {
      if (val === "매장찾기") {
        this.images = [];
      }
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
      const result = [...secondContents.data];
      this.content = result.find((item) => item.name === name);
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
    querySelections(value) {
      this.name = value;
      this.getCordinate;
      const resturant = [...secondContents.data].find(
        (item) => item.name === value
      );
      this.images = resturant.third.images;
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
      height: 80%;
      background: rgba($color: #ffffff, $alpha: 1);
      z-index: 100;
      overflow-y: auto;
      @include box-shadow(0, 0, 10px, 0, rgba($color: black, $alpha: 0.4));

      @include tablet {
        position: static;
        width: 80%;
        height: 100%;
        margin: 0 auto;
        margin-bottom: 20px;
      }
      @include mobile {
        position: static;
        width: 100%;
        height: 100%;
        margin-bottom: 20px;
      }

      .#{$this}__tab-section {
        padding: 0;
        @include desktop-small {
          // padding: 100px 0;
        }
        @include tablet {
          // padding: 80px 20px;
        }

        .v-tab {
          @include set-text(400, 16, rgba($color: $color-footer, $alpha: 1));
          @include tablet {
            // border-bottom: 2px solid #ddd;
            // font-size: 0.8rem;
          }
          &.v-tab--active {
            color: $color-accent;
            font-weight: 600;
          }
        }
      }
      .#{$this}__tab-contents2-info {
        position: absolute;
        bottom: 5px;
        right: 5px;
        @include set-text(bold, 11, rgba($color: $color-footer, $alpha: 1));
      }
      .#{$this}__tab-contents2-title {
        position: relative;
        width: 100%;
        padding: 40px 25px;
        margin-top: 5px;
        text-align: center;
        @include set-text(bold, 26, rgba($color: $color-title, $alpha: 0.7));
        background: rgba($color: $color-accent, $alpha: 1);
      }
      .#{$this}__tab-image-section {
        width: 100%;
        height: calc(100% - 100px);
        @include tablet {
          display: none;
        }

        @include mobile {
          display: none;
        }
        .owl-store-third-wrapper .v-image {
          height: 80% !important;
        }
      }
      .#{$this}__tab-contents2 {
        padding: 25px;

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
      .#{$this}__search {
        padding: 30px 15px;
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
  @include desktop-small {
    max-width: 80%;
  }

  @include mobile {
    max-width: 100%;
  }

  .v-toolbar__content {
    justify-content: flex-end;
    align-items: center;
    background: rgba($color: $color-accent, $alpha: 1);
  }
}

.owl-store__second-section {
  padding: 100px 233px 0 329px;
  @include desktop-small {
    padding: 120px;
    padding-bottom: 0;
  }
  @include tablet {
    padding: 100px;
    padding-bottom: 0;
  }

  @include mobile {
    padding: 20px;
    padding-bottom: 0;
  }
}
.owl-store__second-empty-section {
  padding-bottom: 122px;
}

.owl-store__third-section {
  padding: 150px 0;
  width: 100%;
  @include tablet {
    padding: 80px 0;
  }

  @include mobile {
    padding: 20px;
    padding-bottom: 0;
  }
}
.owl-store__forth-section {
  padding-top: 155px;
  padding-bottom: 155px;
  background: rgba($color: #edede5, $alpha: 0.4);
  @include desktop-small {
    padding: 75px 0;
  }
  @include tablet {
    padding: 50px 0;
  }
}
</style>
