<template lang="pug">
  swiper.silders(:options="swiperOption")
    swiper-slide.page(v-for="(slide,index) in slides" :key="index")
      .module(v-for="item in slide" :key='item.name')
        img(v-lazy="item.imgUrl")
        .name {{item.name}}
    .swiper-pagination(slot="pagination")
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { State, Action } from "vuex-class";

@Component({
  name: "swipers",
  components: {
    swiper,
    swiperSlide
  }
})
export default class Swiper extends Vue {
  @State slides: StoreState.slides[];

  private swiperOption: Object = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
}
</script>

<style scoped lang="less">
.silders {
  padding-bottom: 25px;

  .page {
    .module {
      display: inline-block;
      width: 20%;
      text-align: center;
      padding-top: 13px;

      img {
        height: 44px;
        width: 44px;
      }

      .name {
        font-size: 12px;
      }
    }
  }

  .swiper-pagination {
    bottom: 3px;

    span {
      background: #f5734b;
    }
  }
}
</style>
