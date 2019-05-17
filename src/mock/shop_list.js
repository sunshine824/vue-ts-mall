import Mock from 'mockjs'

const lists = [
  {
    'id': 1,
    'url': '//m.dianping.com/tuan/deal/18954707?from=m_reculike&rec_query_id=187b73b1-e193-45ec-8e02-1e75cfedb06a',
    'imgUrl': '//p1.meituan.net/deal/e09fd65dee8728d69daa2a0841cdbb4e28902.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0',
    'shopName': '音乐之声大酒店',
    'distance': '286m',
    'desc': '[中山公园] 20元代金券1张，可叠加',
    'price_current': '1',
    'price_old': '20',
    'sale_count': '已售6236'
  },
  {
    'id': 2,
    'url': '//m.dianping.com/tuan/deal/24207934?from=m_reculike&rec_query_id=187b73b1-e193-45ec-8e02-1e75cfedb06a',
    'imgUrl': '//p0.meituan.net/deal/f4a3f28a951305341aabca03cb86dba0312270.jpeg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0',
    'shopName': '二人转东北菜',
    'distance': '591m',
    'desc': '[中山公园] 单人超值套餐，提供免费WiFi',
    'price_current': '12.9',
    'price_old': '29',
    'sale_count': '已售455'
  },
  {
    'id': 3,
    'url': '//m.dianping.com/tuan/deal/21955594?from=m_reculike&rec_query_id=187b73b1-e193-45ec-8e02-1e75cfedb06a',
    'imgUrl': '//p1.meituan.net/deal/757052f29bca1bc1fc078debe772c23483229.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0',
    'shopName': '谷斯汀老香港手工蛋糕',
    'distance': '226m',
    'desc': '[中山公园] 招牌原味蛋糕1个，约430克，长方形',
    'price_current': '15',
    'price_old': '25',
    'sale_count': '已售1243'
  },
  {
    'id': 4,
    'url': '//m.dianping.com/tuan/deal/17612261?from=m_reculike&rec_query_id=187b73b1-e193-45ec-8e02-1e75cfedb06a',
    'imgUrl': '//p0.meituan.net/deal/3fcd2c658be1e6560154769bc69127f63562164.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0',
    'shopName': '正新鸡排',
    'distance': '422m',
    'desc': '[218店通用] 【官方】正新鸡排单人餐',
    'price_current': '10.9',
    'price_cutdown': '新客减9.5',
    'sale_count': '已售197971'
  },
  {
    'id': 5,
    'url': '//m.dianping.com/tuan/deal/28056644?from=m_reculike&rec_query_id=187b73b1-e193-45ec-8e02-1e75cfedb06a',
    'imgUrl': '//p0.meituan.net/deal/cbb2af6d46cd989915a49bc9a5c157d3355447.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0',
    'shopName': '爱茜茜里意大利健康冰淇淋',
    'distance': '539m',
    'desc': '[龙之梦购物中心等53店] 意大利风味玫瑰芝士1个',
    'price_current': '11',
    'price_old': '28',
    'sale_count': '已售937'
  },
  {
    'id': 6,
    'url': '//m.dianping.com/tuan/deal/27633000?from=m_reculike&rec_query_id=187b73b1-e193-45ec-8e02-1e75cfedb06a',
    'imgUrl': '//p1.meituan.net/deal/bee92c0066a347e533532c86d2b29ce324710.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0',
    'shopName': '24TEA廿四茶',
    'distance': '219m',
    'desc': '[中山公园] 思慕雪系列2选1',
    'price_current': '12.8',
    'price_old': '22',
    'sale_count': '已售6'
  },
  {
    'id': 7,
    'url': '//m.dianping.com/tuan/deal/27609833?from=m_reculike&rec_query_id=187b73b1-e193-45ec-8e02-1e75cfedb06a',
    'imgUrl': '//p1.meituan.net/deal/684234759406f032259051c4b112ccf856681.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0',
    'shopName': '赞蛙',
    'distance': '545m',
    'desc': '[5店通用] 100元代金券1张，全场通用',
    'price_current': '69.9',
    'price_old': '100',
    'sale_count': '已售694'
  },
  {
    'id': 8,
    'url': '//m.dianping.com/tuan/deal/22261052?from=m_reculike&rec_query_id=187b73b1-e193-45ec-8e02-1e75cfedb06a',
    'imgUrl': '//p0.meituan.net/deal/9e78d1f1cab490eb1e3d2b9c20768637100034.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0',
    'shopName': '龙门花甲',
    'distance': '466m',
    'desc': '[11店通用] 招牌花甲，建议1-2人使用',
    'price_current': '16.8',
    'price_old': '22',
    'sale_count': '已售9365'
  },
  {
    'id': 9,
    'url': '//m.dianping.com/tuan/deal/8341015?from=m_reculike&rec_query_id=187b73b1-e193-45ec-8e02-1e75cfedb06a',
    'imgUrl': '//p0.meituan.net/deal/0be8d6f4610dee0150b65f874192cabd47239.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0',
    'shopName': '鲜之恋情水果吧',
    'distance': '545m',
    'desc': '[龙之梦购物中心等4店] 鲜榨果汁5选1，包间免费',
    'price_current': '12.8',
    'price_old': '21',
    'sale_count': '已售66297'
  },
  {
    'id': 10,
    'url': '//m.dianping.com/tuan/deal/23858190?from=m_reculike&rec_query_id=187b73b1-e193-45ec-8e02-1e75cfedb06a',
    'imgUrl': '//p0.meituan.net/deal/b3018dd6f296f225bf4ada408949a70144400.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0',
    'shopName': '真功夫',
    'distance': '454m',
    'desc': '[21店通用] 鱼香茄子饭+金杏蜜桃汁1份',
    'price_current': '17',
    'sale_count': '已售9063',
    'price_cutdown': '新客减10.5'
  }
]

const createShopLists = function () {
  for (let i = 0; i <= 96; i++) {
    lists.push(Mock.mock({
      id: '@guid',
      url: '@url()',
      imgUrl: Mock.Random.image('180x180'),
      shopName: '@csentence(4,7)',
      distance: Mock.Random.float(60, 100, 0, 2) + 'm',
      desc: '@cparagraph',
      price_current: Mock.Random.float(60, 100, 0, 2),
      sale_count: '已售' + Mock.Random.float(300, 1000, 0, 0),
      price_cutdown: '新客减' + Mock.Random.float(1, 10, 0, 2),
    }))
  }
}
createShopLists()

//过滤商品
export const filterShops = function (params) {
  const { page, pageSize, searchVal } = params
  if (searchVal) {
    let result = lists.filter(
      (item) => item.shopName.indexOf(searchVal) > -1
    )
    return filterResult({ page, pageSize, result })
  } else {
    return filterResult({ page, pageSize, result: lists })
  }
}

//过滤查询出来的数据
const filterResult = function (params) {
  const { page, pageSize, result = [] } = params
  const len = result.length
  const start = (page - 1) * pageSize
  const end = (start * 1 + pageSize * 1) >= len ? len : (start * 1 + pageSize * 1)
  return {
    data: result.slice(start, end),
    page: page,
    pageSize: pageSize,
    pages: Math.ceil(len / pageSize),
    totals: len,
    hasNextPage: (start * 1 + pageSize * 1) < len
  }
}