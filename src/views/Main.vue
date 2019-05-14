<template lang="pug">
  .main-wrapper
    v-header
    .content-wrapper
      v-swiper
      div(v-if="load")
        headline
        board
        super_sale
        shop_lists
      .loading(v-else)
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import { State, Action } from "vuex-class";
import Header from "@/components/main/header.vue";
import Swiper from "@/components/main/swipers.vue";
import HeadLine from "@/components/main/headline.vue";
import Board from "@/components/main/board.vue";
import SuperSale from '@/components/main/super_sale.vue'
import ShopLists from '@/components/main/shops.vue'

@Component({
  components: {
    "v-header": Header,
    "v-swiper": Swiper,
    headline: HeadLine,
    board: Board,
    super_sale:SuperSale,
    shop_lists:ShopLists
  }
})
export default class Main extends Vue {
  @Action initAjax: () => void;
  @State load: boolean;

  mounted() {
    this.initAjax();
  }
}
</script>

<style scoped lang="less">
.content-wrapper {
  padding-top: 50px;
}

.loading {
  background: url('//www.dpfile.com/app/app-m-module/static/6261145dd7c0f26bc0a26831e5cb358a.gif') center 30px no-repeat #fff;
  background-size: 90px;
  height: 300px;
}
</style>
