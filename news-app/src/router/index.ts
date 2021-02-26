import { IHeaderInfo } from '@/typings'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:uniquekey/:from',
    name: 'Detail',
    component: () => import(/* webpackChunkName: 'detail' */ '../views/Detail.vue')
  },
  {
    path: '/mynews',
    name: 'MyNews',
    component: () => import(/* webpackChunkName: 'mynews' */ '../views/MyNews.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export const headerInfos: Array<IHeaderInfo> = [
  {
    // 路由名称
    name: 'Home',
    // 标题
    title: '新闻头条',
    // 左图标是否显示
    left: false,
    // 右图标是否显示
    right: true,
    // 左边显示的图标名称 'iconfont icon-' + ...path
    leftIcon: '',
    // 右边显示的图标名称
    rightIcon: 'mine',
    // 左边图标的路由
    leftPath: '',
    // 右图标的路由
    rightPath: '/mynews'
  },
  {
    // 路由名称
    name: 'MyNews',
    // 标题
    title: '收藏列表',
    // 左图标是否显示
    left: true,
    // 右图标是否显示
    right: false,
    // 左边显示的图标名称 'iconfont icon-' + ...path
    leftIcon: 'arrow-right',
    // 右边显示的图标名称
    rightIcon: '',
    // 左边图标的路由
    leftPath: '',
    // 右图标的路由
    rightPath: ''
  },
  {
    // 路由名称
    name: 'Detail',
    // 标题
    title: '新闻详情',
    // 左图标是否显示
    left: true,
    // 右图标是否显示
    right: true,
    // 左边显示的图标名称 'iconfont icon-' + ...path
    leftIcon: 'arrow-right',
    // 右边显示的图标名称
    rightIcon: 'star-o',
    // 左边图标的路由
    leftPath: '',
    // 右图标的路由
    rightPath: ''
  }
]

export default router
