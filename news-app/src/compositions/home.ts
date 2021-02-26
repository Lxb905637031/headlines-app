import { IGobalState } from '@/store'
import { SET_CURRENT_TYPE, SET_NEWS_LIST } from '@/store/home/actionType'
import { IHomeState, INewsInfo, IPostData, NAV_TYPES } from '@/typings'
import { computed, ComputedRef } from 'vue'
import { Store } from 'vuex'

function useNewsList(store: Store<IGobalState>): ComputedRef<INewsInfo[]> {
  const state: IHomeState = store.state.home
  // 取出请求参数
  const type: NAV_TYPES = computed(() => (state.currentType)).value
  const pageNum: number = computed(() => state.newsList.pageNum).value
  const count: number = computed(() => state.newsList.count).value

  // 最终数据
  const newsList: ComputedRef<INewsInfo[]> = computed(() => (state.newsList.news))

  store.dispatch(`home/${SET_NEWS_LIST}`, {
    type,
    pageNum,
    count
  } as IPostData)

  return newsList
}

function useNavType(store: Store<IGobalState>) {
  return (type: NAV_TYPES): ComputedRef<INewsInfo[]> => {
    store.dispatch(`home/${SET_CURRENT_TYPE}`, type)
    const newsList: ComputedRef<INewsInfo[]> = useNewsList(store)

    return newsList
  }
}

export {
  useNavType,
  useNewsList
}