/* eslint-disable */ 
import { NAV_TYPES } from './index'

// 每条news的类型
interface INewsInfo {
  uniquekey: string,
  title: string,
  date: string,
  category: string,
  url: string,
  thumbnail_pic_s?: string,
  thumbnail_pic_s02?: string,
  thumbnail_pic_s03?: string
}

// newsList的类型
interface INewsList {
  hasMore: boolean,
  isLoading: boolean,
  pageNum: number,
  count: number,
  news: INewsInfo[]
}

// home模块state类型
interface IHomeState {
  currentType: NAV_TYPES,
  newsList: INewsList
}

// detail模块state类型
interface IDetailState {
  currentNews: INewsInfo
}

export {
  INewsInfo,
  INewsList,
  IHomeState,
  IDetailState
}