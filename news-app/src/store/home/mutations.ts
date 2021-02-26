import {
  IHomeState,
  INewsList,
  IRetNewsData,
  NAV_TYPES
} from '@/typings'
import * as actionTypes from './actionType'

export default {
  [actionTypes.SET_LOADING](state: IHomeState, isLoading: boolean) {
    state.newsList.isLoading = isLoading
  },
  [actionTypes.SET_NEWS_LIST](state: IHomeState, payload: IRetNewsData) {
    // 还有更多
    if (payload.hasMore) {
      // 合并数据
       state.newsList.news = [...state.newsList.news, ...payload.data!]
      // 页码加1
       state.newsList.pageNum += 1
     }
     
     state.newsList.hasMore = payload.hasMore
     state.newsList.isLoading = false
  },
  [actionTypes.SET_CURRENT_TYPE](state: IHomeState, type: NAV_TYPES) {
    state.currentType = type
    // 新闻类型改变重置
    state.newsList = <INewsList>{
      hasMore: true,
      isLoading: false,
      pageNum: 0,
      count: 10,
      news: []
    }
  }
}