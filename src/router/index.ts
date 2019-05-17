import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig } from 'vue-router'

const Main: AsyncComponent = (): any => import('@/views/Main.vue')
const ShopList: AsyncComponent = (): any => import('@/views/ShopList.vue')

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'mian',
    component: Main
  },
  {
    path: '/shoplist',
    name: 'shoplist',
    component: ShopList
  }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router;
