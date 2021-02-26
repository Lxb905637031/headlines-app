import { NAV_TYPES,  INewsList, IHomeState } from '@/typings'

const state: IHomeState = {
  currentType: NAV_TYPES.TOP,
  newsList: <INewsList>{
    // 是否还有更多数据
    hasMore: true,
    // 是否正在加载中
    isLoading: false,
    // 当前页码
    pageNum: 0,
    // 每页条数
    count: 10,
    // 当前新闻列表数据
    news: []
  }

}

export default state