import { MutationTree } from 'vuex'
import TYPES from './types'

const mutations: MutationTree<any> = {
  [TYPES.SET_SEARCH_VAL](state, val): void {
    state.searchVal = val
  },
  [TYPES.SET_SLIDER](state, res): void {
    state.slides = res
  },
  [TYPES.SET_HEADLINE](state, res): void {
    state.headlines = res
  },
  [TYPES.SET_LOAD](state, flag): void {
    state.load = flag
  },
  [TYPES.SET_ACTIVITIES](state, res):void{
    state.activities = res
  },
  [TYPES.SET_SUPER_SALE](state, res):void{
    state.superSales = res
  },
  [TYPES.SET_SHOPS](state, res):void{
    state.shops = res
  }
}

export default mutations
