import { IGobalState } from '@/store'
import { IHomeState } from '@/typings'
import { IHeaderInfo, IPostData, NAV_TYPES } from '@/typings/common'
import { computed, onMounted, Ref } from 'vue'
import { Store } from 'vuex'
import { headerInfos } from '../router/index'
import _ from 'lodash'

// 获取header对应的路由信息
function useRouteInfo(routeName: string): undefined | IHeaderInfo {
  const routeInfo: undefined | IHeaderInfo = headerInfos.find((item: IHeaderInfo) => {
    return item.name === routeName
  })
  return routeInfo
}

// 图片淡入效果
function useImgShow(imgRefs: Ref<null | HTMLElement>[]): void {
  imgRefs.map((imgRef) => {
    const oImg = imgRef.value!

    oImg.onload = function() {
      oImg.style.opacity = '1'
    }

  })
}

/**
 * @param store 仓库
 * @param module stroe的模块名
 * @param actionType 模块派发对应的action
 * @param element list元素
 */
// 处理下拉加载
function useLoadingMore(
  store: Store<IGobalState>,
  module: string,
  actionType: string,
  element: Ref<null | HTMLElement> 
) {
  let el: HTMLElement
  let state: IHomeState

  // 类型断言操作
  switch(module) {
    case 'home':
      state = store.state.home as IHomeState
      break
    default:
      break
  }

  function _loadMore(): void {
    // 列表高度
    const listHeight: number = el.clientHeight
    // 滚动高度
    const scrollHeight: number = el.scrollHeight
    // 滚动top
    const scrollTop: number = el.scrollTop

    const type: NAV_TYPES = computed(() => state.currentType).value
    const pageNum: number = computed(() => state.newsList.pageNum).value
    const count: number = computed(() => state.newsList.count).value

    if (listHeight + scrollTop >= scrollHeight - 30) {
      store.dispatch(`${module}/${actionType}`, {
        type,
        pageNum,
        count
      } as IPostData)
    }
  }

  onMounted(() => {
    el = element.value as HTMLElement
    el.addEventListener('scroll', _.debounce(_loadMore, 300)  ,false)
  })
  
  return {
    isLoading: computed(() => state.newsList.isLoading).value,
    hasMore: computed(() => state.newsList.hasMore).value
  }
}

export {
  useRouteInfo,
  useImgShow,
  useLoadingMore
}