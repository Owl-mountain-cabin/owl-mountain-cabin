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
    <div class="owl-franchise__sixth-section"></div>
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
    padding: 160px 273px 0 273px;
  }
  .#{$this}__third-section {
    padding-top: 175px;
  }
  .#{$this}__forth-section {
    padding: 142px 140px 0 140px;
    .v-data-table__wrapper {
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
    padding: 202px 140px 0 140px;
  }
  .#{$this}__sixth-section {
    padding: 175px 160px 0 160px;
  }
}
</style>
