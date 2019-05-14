import Mock from 'mockjs'
import slides from './slides'
import headlines from './headline'
import board from './board'
import supersale from './super_sale'
import { filterShops } from './shop_list'

Mock
  .mock('/swiper', 'post', () => {
    return {
      code: 200,
      data: slides.list
    }
  })
  .mock('/headline', 'post', () => {
    return {
      code: 200,
      data: headlines.list
    }
  })
  .mock('/activity', 'post', () => {
    return {
      code: 200,
      data: board.list
    }
  })
  .mock('/supersale', 'post', () => {
    return {
      code: 200,
      data: supersale.list
    }
  })
  .mock('/shops', 'post', (config) => {
    const params = config.body &&  JSON.parse(config.body)
    const result = filterShops(params.searchVal)
    return {
      code: 200,
      data: result
    }
  })
