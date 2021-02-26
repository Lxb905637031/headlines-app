<template>
  <header class="header">
    <div class="icon-area left">
      <span :class="'iconfont icon-' + leftIcon" @click="goBack" />
    </div>
    <h1>{{ title }}</h1>
    <div class="icon-area right">
      <!-- 新闻详情页右坐标-->
      <span
        v-if="right && name === 'Detail'"
        :class="'iconfont icon-' + rightIcon"
        @click="handleFollowClick"
      />
      <!--新闻头条页右坐标-->
      <router-link :to="rightPath" v-else-if="right && name !== 'Detail'">
        <span :class="'iconfont icon-' + rightIcon" />
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { IHeaderInfo } from '../../typings'
import { useRouteInfo, useNewsFollow, useFollowedCheck } from '../../compositions/index'
import { useStore } from 'vuex'
 
export default defineComponent({
  name: 'Header',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()

    const state: IHeaderInfo = reactive({
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
      rightPath: '/mynews',
    })

    // 返回上一页
    const goBack = (): void => {
      if (route.name === 'detail') {
        router.push('/')
        return
      }
      router.go(-1)
    }

    // 点击收藏星号
    const handleFollowClick = (): void => {
      useNewsFollow(store, (status) => {
        // status决定星星如何显示
        state.rightIcon = status ? 'star-full' : 'star-o'
      })
    }

    watch(() => {
      // 监听routeName变化
      return route.name
    },(routeName) => {
      // 匹配header信息
      const routeInfo: IHeaderInfo | undefined = useRouteInfo(routeName as string)
      // 将state和heaer匹配信息合并
      Object.assign(state, routeInfo)
      
      // 收藏页检查
      if (routeName === 'Detail') {
        useFollowedCheck(route, (status) => {
          state.rightIcon = status ? 'star-full' : 'star-o'
        })
      }
    })

    return {
      goBack,
      ...toRefs(state),
      handleFollowClick
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.44rem;
  background-color: #cf5f55;
  color: #fff;

  h1 {
    text-align: center;
    line-height: 0.44rem;
    font-size: 0.18rem;
  }

  .icon-area {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 0.44rem;
    height: 0.44rem;

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }

    a {
      color: #fff;
    }

    .icon-mine {
      font-size: 0.25rem;
    }

    .iconfont.icon-arrow-right {
      vertical-align: 0.025rem;
    }

    .icon-star-o,
    .icon-star-full {
      font-size: 0.22rem;
      vertical-align: 0.025rem;
    }

    .icon-star-full {
      color: #f6bf4e;
    }
  }
}
</style>
