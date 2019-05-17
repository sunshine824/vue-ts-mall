<template lang="pug">
.shop-list-wrap
    .head 猜你喜欢
    van-list(v-model="loading" :finished="finished" :offset="100" loading-text="正在加载..." finished-text="我是有底线的" @load="onLoad")
      shop-item(v-for="(shop,index) in shops.data" @goShopList="_goShopList" :key="shop.url" :shop="shop")
</template>
<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import { State, Action, Mutation } from "vuex-class";
import ShopItem from "../shopItem.vue";

interface pageObj {
  page: number;
  pageSize: number;
  searchVal: string;
}

@Component({
  name: "Shops",
  components: {
    ShopItem
  }
})
export default class Shops extends Vue {
  @Action getShops: any;
  @State shops: StoreState.result;
  @State searchVal: string;

  loading: boolean = false;
  finished: boolean = false;
  pageObj: pageObj = {
    page: 1,
    pageSize: 10,
    searchVal: ""
  };

  _goShopList(shop: any): void {
    this.$router.push({
      name: "shoplist",
      params: { id: shop.id }
    });
  }

  //加载更多
  async onLoad() {
    let page: number = this.pageObj.page;
    page++;
    this.pageObj.page = page;
    await this.getShops({ params: this.pageObj, isPush: true });
    this.loading = false;
  }

  @Watch("searchVal")
  onSearchChanged(newVal: string, oldVal: string) {
    const searchVal = this.searchVal;
    this.pageObj.searchVal = searchVal;
    this.pageObj.page = 1;
    this.getShops({ params: this.pageObj, isPush: false });
  }
  @Watch("shops")
  onShopsChanged(newVal: any) {
    this.finished = !newVal.hasNextPage;
  }
}
</script>
<style scoped lang="less">
.shop-list-wrap {
  .head {
    padding-left: 15px;
    font-size: 14px;
    color: #777;
    padding: 10px;
  }
}
</style>

