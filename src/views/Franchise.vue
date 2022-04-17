<template>
  <div class="owl-franchise">
    <div class="owl-franchise__first-section">
      <Dimmed :height="'100%'" />
      <ImageWrapper
        :imageSrc="'franchise-header-image.png'"
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
        :data="profit"
        :desc="profitDesc"
        :title="profitTitle"
        :subTitle="profitSubTitle"
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
import profit from "@/constants/franchise/table/profit.js";
import cost from "@/constants/franchise/table/cost.js";
import profitContents from "@/constants/franchise/forth.json";
import costContents from "@/constants/franchise/fifth.json";

export default {
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
      profit,
      cost,
      profitTitle: profitContents.title,
      profitSubTitle: profitContents.subTitle,
      profitDesc: profitContents.desc,
      costTitle: costContents.title,
      costSubTitle: costContents.subTitle,
      costDesc: costContents.desc,
    };
  },
};
</script>

<style lang="scss">
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
    .v-data-table__wrapper {
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
  }
  .#{$this}__sixth-section {
    padding: 5% 160px;
    @include desktop-medium {
      padding: 3% 100px;
    }
  }
  .#{$this}__seventh-section {
    //padding-top: 190px;
  }
}
</style>
