declare namespace StoreState {

  // 顶部可左右滑动模块
  export interface slides {
    // 点击跳转链接
    url: string,
    // 图片链接
    imgUrl: string,
    // 模块名称
    name: string,
  }

  export interface headlines {
    // 文章图片数量统计
    imgNum: string,
    // 图片链接
    imgUrl: string,
    // 文章标题
    title: string,
    // 点击跳转链接
    url: string
  }

   // 活动特惠
   export interface activity {
    // 活动标题
    title: string,
    // 活动描述
    desc: string,
    // 活动图片链接
    imgUrl: string
  }

  // 超值特惠
  export interface superSale {
    // 点击跳转链接
    url: string,
    // 图片链接
    imgUrl: string,
    // 活动标题
    title: string,
    // 当前价格
    price_current: string,
    // 原价
    price_old: string
  }

  // 商户
  export interface shop {
    // 商户跳转链接
    url: string,
    // 商户图片链接
    imgUrl: string,
    // 商户名称
    shopName: string,
    // 距离
    distance: string,
    // 简介
    desc: string,
    // 当前价格
    price_current: number,
    // 原价
    price_old: number,
    // 已售
    sale_count: string
  }

}
