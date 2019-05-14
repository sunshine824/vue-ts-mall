import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

interface State {
  slides: StoreState.slides[],
  searchVal:string,
  headlines:StoreState.headlines[],
  activities: StoreState.activity[],
  superSales: StoreState.superSale[],
  shops: StoreState.shop[],
  load:boolean

}

const state: State = {
  slides: [],
  headlines:[],
  activities: [],
  superSales: [],
  shops: [],
  searchVal:'',
  load:false
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
