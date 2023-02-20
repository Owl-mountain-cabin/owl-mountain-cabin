<template>
  <div class="owl-franchise">
    <div class="owl-franchise__first-section">
      <Dimmed :height="'100%'" />
      <ImageWrapper
        :imageSrc="'franchise-header-image.webp'"
        title="FRANCHISE"
      />
    </div>
    <div class="owl-franchise__second-section">
      <SecondSection />
    </div>
    <div class="owl-franchise__third-section">
      <ThirdSection />
    </div>
    <div class="owl-franchise__forth-section">
      <ForthSection
        width="w-45"
        :data="gangnamProfit"
        :desc="gangnamProfitDesc"
        :title="gangnamProfitTitle"
        :subTitle="gangnamProfitSubTitle"
      />
    </div>
    <div class="owl-franchise__forth-section">
      <ForthSection
        width="w-45"
        :data="yeonsinnaeProfit"
        :desc="yeonsinnaeProfitDesc"
        :title="yeonsinnaeProfitTitle"
        :subTitle="yeonsinnaeProfitSubTitle"
      />
    </div>
    <div class="owl-franchise__fifth-section">
      <ForthSection
        width="w-35"
        :data="cost"
        :desc="costDesc"
        :title="costTitle"
        :subTitle="costSubTitle"
      />
    </div>
    <div class="owl-franchise__sixth-section">
      <SixthSection />
    </div>
    <div class="owl-franchise__seventh-section">
      <SeventhSection />
    </div>
    <Banner :title="title" :desc="desc" />
  </div>
</template>

<script>
import Dimmed from "@/components/Dimmed.vue";
import ImageWrapper from "@/components/ImageWrappers.vue";
import Banner from "@/components/Banner.vue";
import contents from "@/constants/common/index.json";
import SecondSection from "@/features/franchise/SecondSection.vue";
import ThirdSection from "@/features/franchise/ThirdSection.vue";
import ForthSection from "@/features/franchise/ForthSection.vue";
import SixthSection from "@/features/franchise/SixthSection.vue";
import SeventhSection from "@/features/franchise/SeventhSection.vue";
import gangnamProfit from "@/constants/franchise/table/gangnam/profit.js";
import yeonsinnaeProfit from "@/constants/franchise/table/yeonsinnae/profit.js";
import cost from "@/constants/franchise/table/cost.js";
import profitContents from "@/constants/franchise/forth.json";
import costContents from "@/constants/franchise/fifth.json";
import { franchiseMeta } from "@/utils/meta/franchise";

export default {
  name: "Franchise",
  metaInfo: franchiseMeta,
  components: {
    Dimmed,
    ImageWrapper,
    Banner,
    SecondSection,
    ThirdSection,
    ForthSection,
    SixthSection,
    SeventhSection,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      title: contents.bannerTitle,
      desc: contents.phone,
      yeonsinnaeProfit,
      gangnamProfit,
      cost,
      yeonsinnaeProfitTitle: profitContents.yeonsinnae.title,
      yeonsinnaeProfitSubTitle: profitContents.yeonsinnae.subTitle,
      yeonsinnaeProfitDesc: profitContents.yeonsinnae.desc,
      gangnamProfitTitle: profitContents.gangnam.title,
      gangnamProfitSubTitle: profitContents.gangnam.subTitle,
      gangnamProfitDesc: profitContents.gangnam.desc,
      costTitle: costContents.title,
      costSubTitle: costContents.subTitle,
      costDesc: costContents.desc,
    };
  },
};
</script>

<style lang="scss">
.v-application--wrap {
  overflow: hidden;
}
.owl-franchise {
  $this: "owl-franchise";
  .#{$this}__section {
    height: 100vh;
  }
  .#{$this}__first-section {
    position: relative;
  }
  .#{$this}__second-section {
    //padding: 160px 273px 0 273px;
    padding: 5% 273px;

    @include desktop-medium {
      padding: 3% 173px;
    }
    @include mobile {
      padding: 0 20px;
    }
  }
  .#{$this}__third-section {
    //padding-top: 175px;
    //padding: 5% 0;
  }
  .#{$this}__forth-section {
    //padding: 142px 140px 99px 140px;
    padding: 5% 140px;

    @include desktop-medium {
      padding: 3% 100px;
    }
    @include mobile {
      padding: 80px 20px;
    }
    .v-data-table__wrapper {
      @include mobile {
        width: 100%;
        min-width: 260px;
      }
      thead {
        tr {
          th {
            background: rgba($color: #b2b2b2, $alpha: 0.1);
          }
        }
      }
      tbody {
        tr {
          &:nth-last-child(2) {
            td {
              background-color: rgba($color: #fef8ec, $alpha: 1);
              @include set-text(400, 14, rgba($color: $color-title, $alpha: 1));
            }
          }
        }
      }
    }
  }
  .#{$this}__fifth-section {
    //padding: 103px 140px 67px 140px;
    padding: 5% 140px;
    @include desktop-medium {
      padding: 3% 100px;
    }
    @include mobile {
      padding: 50px 20px;
    }
    background: rgba($color: #f8f8f5, $alpha: 1);
    thead {
      tr {
        th {
          background: rgba($color: #f8f8f5, $alpha: 1);
          &.cost {
            text-align: center !important;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          background: rgba($color: #f8f8f5, $alpha: 1);
        }
      }
    }
    .owl-franchise-forth__address-wrapper {
      br {
        &:nth-child(4) {
          @include tablet {
            display: block !important;
          }
        }
        &:nth-child(8) {
          @include tablet {
            display: block !important;
          }
        }
        &:nth-child(10) {
          @include tablet {
            display: block !important;
          }
        }
        &:nth-child(12) {
          @include tablet {
            display: block !important;
          }
        }
      }
    }
  }
  .#{$this}__sixth-section {
    padding: 5% 160px;
    @include desktop-medium {
      padding: 3% 100px;
    }
    @include mobile {
      padding: 50px 20px;
    }
  }
  .#{$this}__seventh-section {
    //padding-top: 190px;
  }
}
</style>
