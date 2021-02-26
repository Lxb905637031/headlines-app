import { Service } from 'egg';

import { getPageData } from '../lib/utils'
import { IGetNewsListParams, IHttpGetParams, INewsData, IPageData } from '../../typings'

export default class Api extends Service {
  public async getNewsList({ type, pageNum, count }: IGetNewsListParams): Promise<IPageData<INewsData>> {
    const { ctx } = this
    // 设置默认值
    const pageNumber: number = pageNum || 0
    const pageCount: number = count || 10

    return ctx.httpGet(<IHttpGetParams>{
      url: ctx.app.config.API.GET_NEWS_LIST,
      data: {
        type: type || 'top'
      },
      success(data) {
        return getPageData<INewsData>(data, pageNumber, pageCount)
      },
      fail(err) {
        throw new Error('Request failed' + err);
      }
    })
  }
}
