import Mock from 'mockjs'
import slides from './slides'
import headlines from './headline'
import board from './board'
import supersale from './super_sale'
import { filterShops } from './shop_list'


// 设置响应时间
Mock.setup({ timeout: '200-1000' });

Mock
  .mock('/swiper', 'post', () => {
    return {
      code: 200,
      data: slides.list,
      msg: '请求成功'
    }
  })
  .mock('/headline', 'post', () => {
    return {
      code: 200,
      data: headlines.list,
      msg: '请求成功'
    }
  })
  .mock('/activity', 'post', () => {
    return {
      code: 200,
      data: board.list,
      msg: '请求成功'
    }
  })
  .mock('/supersale', 'post', () => {
    return {
      code: 200,
      data: supersale.list,
      msg: '请求成功'
    }
  })
  .mock('/shops', 'post', (config) => {
    const params = config.body && JSON.parse(config.body)
    const result = filterShops(params)
    return {
      code: 200,
      data: result,
      msg: '请求成功'
    }
  })
