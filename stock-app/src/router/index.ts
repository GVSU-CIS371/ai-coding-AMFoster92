import { createRouter, createWebHistory } from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WatchlistView from '../views/WatchlistView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomeView },
  { path: '/watchlist', component: WatchlistView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router