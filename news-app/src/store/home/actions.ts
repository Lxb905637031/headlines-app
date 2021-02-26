/*eslint-disable*/
import {
  IHomeState,
  INewsInfo,
  IPostData,
  NAV_TYPES
} from '@/typings'
import * as actionTypes from './actionType'
import { getNewsList } from '../../services'
import { Commit } from 'vuex'

export default {
  // 设置news数据
  [actionTypes.SET_NEWS_LIST]({ commit, state }: { commit: Commit, state: IHomeState}, options: IPostData) {
    // loading状态, 不请求数据
    if (state.newsList.isLoading) {
      return 
    }
    // // 没有更多,不请求数据
    // if (!state.newsList.hasMore) {
    //   return
    // }

    // 第一页加载设置骨架屏，其它显示正在加载中...
    if (state.newsList.pageNum) {
      commit(actionTypes.SET_LOADING, true)
    }

    // 请求数据
    getNewsList<INewsInfo[]>(options).then((data) => {
      commit(actionTypes.SET_NEWS_LIST, data)
    }).catch(err => {
      throw err
    })
  },
  // 更改新闻类型的action
  [actionTypes.SET_CURRENT_TYPE]({ commit }: { commit: Commit }, type: NAV_TYPES) {
    commit(actionTypes.SET_CURRENT_TYPE, type)
  }
}
