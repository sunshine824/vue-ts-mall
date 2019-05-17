<template lang="pug">
    .shop_list
      .shop_info
        nav.shop_nav(style="background-image: url('https://fuss10.elemecdn.com/5/b5/6d3bd11ac1993e10bb353933530c7png.png?imageMogr/format/webp/thumbnail/750x/')")
          van-icon.back(name="arrow-left" @click="back")
        .shop_sale
          .shop_icon
            p.tag
              span 品牌
            img(src="https://fuss10.elemecdn.com/6/11/96c5f65b8db9dc5dc4c1adb348912png.png?imageMogr/format/webp/thumbnail/150x/")
          .shop_name
            h2.txt 西贝莜面村(成都银泰中心店)
            p.count
              span 评价4.6 &nbsp;&nbsp;
              span 月销709单
      .shop_tab
        van-tabs(v-model="tabIndex")
          van-tab(title="点餐")
          van-tab(title="评价")
          van-tab(title="商家")
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "shop-list"
})
export default class ShopList extends Vue {
  tabIndex: number = 0;

  back() {
    this.$router.go(-1);
  }

  mounted() {
    console.log(this.$route.params.id);
  }
}
</script>
<style lang="less">
.shop_list {
  .van-hairline--top-bottom::after {
    border-width: 0;
    border-bottom: 1px solid #ebebeb;
  }
  .van-tabs__line{
    background: #f63;
  }
}
</style>
<style scoped lang="less">
.shop_list {
  position: relative;
  .shop_info {
    position: relative;
    padding-top: 2.7rem;
    .shop_nav {
      padding: 0.2rem 0.3rem 0 0.3rem;
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
      height: 2.7rem;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      box-sizing: border-box;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-image: linear-gradient(
          0deg,
          hsla(0, 0%, 100%, 0),
          rgba(0, 0, 0, 0.5)
        );
      }
      .back {
        color: #fff;
        font-size: 0.65rem;
      }
    }
    .shop_sale {
      position: relative;
      display: flex;
      flex-flow: column;
      justify-content: center;
      .shop_icon {
        width: 2rem;
        height: 2rem;
        border-radius: 5px;
        overflow: hidden;
        position: absolute;
        top: 0;
        margin-top: -1.5rem;
        left: 50%;
        margin-left: -1rem;
        .tag {
          position: absolute;
          top: 0;
          left: 0;
          background-image: linear-gradient(90deg, #fff100, #ffe339);
          border-top-left-radius: 5px;
          border-bottom-right-radius: 5px;
          width: 0.7rem;
          height: 0.4rem;
          text-align: center;
          line-height: 0.4rem;
          span {
            color: #6f3f15;
            font-size: 0.25rem;
            transform: scale(0.8);
            display: block;
          }
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .shop_name {
        width: 6rem;
        display: flex;
        flex-flow: column;
        margin: auto;
        padding-top: 0.75rem;
        .txt {
          color: #333;
          font-size: 0.55rem;
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .count {
          text-align: center;
          font-size: 0.3rem;
          color: #999;
          margin-top: 0.1rem;
        }
      }
    }
  }
  .shop_tab {
    position: sticky;
    top: 0px;
    z-index: 2;
    margin-top: 0.7rem;
  }
}
</style>


