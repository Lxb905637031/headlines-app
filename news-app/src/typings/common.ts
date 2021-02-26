import { INewsInfo } from './store'
// 新闻类型的枚举
enum NAV_TYPES {
  TOP = 'top',
  SHEHUI = 'shehui',
  GUOJI = 'guoji',
  YULE = 'yule',
  TIYU = 'tiyu',
  JUNSHI = 'junshi',
  KEJI = 'keji',
  CAIJING = 'caijing',
  SHISHANG = 'shishang'
}

// 请求数据需要的参数类型
interface IPostData {
  type: NAV_TYPES,
  pageNum: number,
  count: number
}

// 路由对应的Header组件设置信息
interface IHeaderInfo {
  name: string,
  title: string,
  left: boolean,
  right: boolean,
  leftIcon: string,
  rightIcon: string,
  leftPath: string,
  rightPath: string
}

// 返回的数据类型
interface IRetNewsData {
  hasMore: boolean,
  data: INewsInfo[]
}

export {
  IPostData,
  IHeaderInfo,
  NAV_TYPES,
  IRetNewsData
}