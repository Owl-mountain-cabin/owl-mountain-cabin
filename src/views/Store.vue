<template>
  <div class="owl-store">
    <div class="owl-store__first-section">
      <Dimmed :height="'100%'" />
      <ImageWrapper :imageSrc="'store-header-image.webp'" title="STORE" />
    </div>
    <div class="owl-store__tab-section">
      <v-item-group :value="this.current">
        <v-row>
          <v-col
            v-for="(item, idx) in list"
            :key="item.name"
            cols="6"
            md="2"
            sm="2"
            lg="2"
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
      <SecondEmptySection :title="emptyTitle" :desc="emptyDesc" />
    </div>
  </div>
</template>

<script>
import Dimmed from "@/components/Dimmed.vue";
import ImageWrapper from "@/components/ImageWrappers.vue";
import SecondSection from "@/features/store/SecondSection.vue";
import SecondEmptySection from "@/features/company/SecondSection.vue";
import ThirdSection from "@/features/store/ThirdSection.vue";
import ForthSection from "@/features/store/ForthSection.vue";
import Banner from "@/components/Banner.vue";
import contents from "@/constants/common/index.json";
import secondContents from "@/constants/store/second.json";
import { storeMeta } from "@/utils/meta/store";

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
  },
  mounted() {
    window.scrollTo(0, 0);
    this.init();
  },
  data() {
    return {
      title: contents.bannerTitle,
      desc: contents.phone,
      current: "",
      location: "",
      originalList: [],
      list: [],
      content: {},
      index: 0,
      emptyTitle: "지역을 <span class='stressed'>선택</span>해주세요.",
    };
  },
  methods: {
    init() {
      const result = [...secondContents.data];
      this.originalList = [...result];
      this.list = [
        { name: "뒤로" },
        ...new Set(result.filter((item) => item.location === "서울")),
      ];
      this.current = result.findIndex((item) => item.name === "연신내") + 1;
      this.location = "서울";
      this.content = result.find((item) => item.name === "연신내");
      this.index = 1;
    },
    handleTab(toggle, name) {
      toggle && toggle();

      if (name === "뒤로") {
        this.handleBack();
        return;
      }

      if (this.index === 0) {
        this.handleTabFirstChange(name);
        return;
      }

      if (this.index === 1) {
        this.handleTabSecondChange(name);
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
      this.handleTabSecondChange(this.list[1].name);
    },
    handleTabSecondChange(name) {
      console.log(name);
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

  .#{$this}__tab-section {
    padding: 122px;
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
  .#{$this}__second-empty-section {
    padding-bottom: 122px;
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
