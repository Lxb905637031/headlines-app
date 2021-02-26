import 'egg';

// 获取新闻列表参数接口
interface IGetNewsListParams {
  type: string,
  pageNum: number,
  count: number
}

// 请求参数接口
interface IHttpGetParams {
  url: string,
  data: any,
  success: (data: any) => void,
  fail: (err: any) => void
}

// 列表页接口
interface IPageData<T> {
  data: Array<T> | null,
  hasMore: boolean 
}

// 新闻数据接口
interface INewsData {
  uniquekey: string,
  title: string,
  date: string,
  category: string,
  author_name: string,
  url: string,
  thumbnail_pic_s?: string,
  thumbnail_pic_s02?: string,
  thumbnail_pic_s03?: string
}

declare module 'egg' {
  IGetNewsListParams,
  IHttpGetParams,
  IPageData,
  INewsData
}