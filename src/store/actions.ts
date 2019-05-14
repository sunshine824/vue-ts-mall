import { ActionTree } from 'vuex'
import { post } from '../public/js/fetch'
import TYPES from './types'
import { StreamState } from 'http2';

const actions: ActionTree<any, any> = {
  //初始化请求
  async initAjax({ dispatch }) {
    let p1: any = dispatch('getSlides')
    let p2: any = dispatch('getHeadLines')
    let p3: any = dispatch('getActivity')
    let p4: any = dispatch('getSuperSale')
    let p5: any = dispatch('getShops')

    //当所有请求成功之后再执行
    Promise.all([p2, p3, p4, p5]).then(res => {
      setTimeout(() => {
        dispatch('setLoadStatus', true)
      }, 300)
    }).catch(err => {
      console.log(err)
    })
  },

  //获取顶部左右滑动数据
  async getSlides({ state, commit }) {
    const res: any = await post('/swiper')
    if (res && res.code == 200) commit(TYPES.SET_SLIDER, res.data)
  },

  //获取头部信息数据
  async getHeadLines({ state, commit }) {
    const res: any = await post('/headline')
    if (res && res.code == 200) commit(TYPES.SET_HEADLINE, res.data)
  },

  //获取活动列表
  async getActivity({ state, commit }) {
    const res: any = await post('/activity')
    if (res && res.code == 200) commit(TYPES.SET_ACTIVITIES, res.data)
  },

  //获取超值优惠
  async getSuperSale({ state, commit }) {
    const res: any = await post('/supersale')
    if (res && res.code == 200) commit(TYPES.SET_SUPER_SALE, res.data)
  },

  //获取商品列表
  async getShops({ state, commit }) {
    const searchVal: string = state.searchVal
    const res: any = await post('/shops', { searchVal})
    if (res && res.code == 200) commit(TYPES.SET_SHOPS, res.data)
  },

  //更新搜索内容
  setSearchVal({ commit }, val: string) {
    commit(TYPES.SET_SEARCH_VAL, val)
  },

  //更新加载状态
  setLoadStatus({ commit }, flag) {
    commit(TYPES.SET_LOAD, flag)
  }
}

export default actions
