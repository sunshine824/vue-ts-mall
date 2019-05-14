import Vue, {AsyncComponent} from 'vue'
import Router, {RouteConfig} from 'vue-router'

const Main: AsyncComponent = (): any => import('@/views/Main.vue')

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'mian',
    component: Main
  }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router;
