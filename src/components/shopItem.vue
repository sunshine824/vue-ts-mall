<template lang="pug">
.shop(@click="handleShop")
  .shop-logo
    img(v-lazy="shop.imgUrl" width="90px" height="90px")
    .tag 免预约
  .content
    .title {{shop.shopName}}
    .desc {{shop.desc}}
    .status
      .price-wrap
        span.price.now {{shop.price_current}}
        span.price.old {{shop.price_old}}
        span.cutdown {{shop.price_cutdown}}
      .sale-count {{shop.sale_count}}
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component({
  name: "shop-item"
})
export default class ShopItem extends Vue {
  @Prop({ type: Object, default: {} }) shop: object;

  @Emit("goShopList") handleShop() {
    return this.shop;
  }
}
</script>
<style scoped lang="less">
.shop {
  display: -webkit-box;
  padding: 0 10px 10px 10px;

  .shop-logo {
    position: relative;

    .tag {
      position: absolute;
      top: 0;
      font-size: 12px;
      transform: scale(0.98);
      padding: 3px 7px;
      background-color: #000;
      color: #e0ba81;
      font-weight: 700;
    }
  }

  .content {
    flex: 1;
    padding-left: 10px;

    .title {
      font-size: 17px;
      font-weight: 700;
      color: #111;
      padding-right: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .desc {
      font-size: 13px;
      color: #777;
      padding: 10px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .status {
      display: flex;
      align-items: center;

      .price-wrap {
        position: relative;

        .price {
          &.now {
            color: #f63;
            font-size: 22px;
            font-weight: 700;
          }

          &.old {
            color: #999;
            font-size: 12px;
            padding-left: 10px;
            text-decoration: line-through;
          }

          &::before {
            content: "\A5";
            font-size: 14px;
            padding-right: 8px;
          }

          &:empty {
            display: none;
          }
        }

        .cutdown {
          position: absolute;
          top: 5px;
          padding: 1px 3px;
          border-radius: 2px;
          color: #f63;
          font-size: 12px;
          border: 1px solid #ff9470;
          max-width: 60px;
          transform: scale(0.75);
          margin-left: -3px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          &:empty {
            display: none;
          }
        }
      }

      .sale-count {
        flex: 1;
        font-size: 13px;
        color: #777;
        text-align: right;
      }
    }
  }
}
</style>


