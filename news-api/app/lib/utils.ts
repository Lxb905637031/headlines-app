import { IPageData } from '../../typings'

function typeOf(value: string): string {
  if (value === 'null') return 'null'

  return typeof(value) === 'object' ?
    {
      '[object Object]' : 'Object',
      '[object Array]' : 'Array'
    }[({}).toString.call(value)] : typeof(value)
}

function formatParams(data: any, appkey: string): string {
  if (typeOf(data) !== 'Object') {
    throw new Error('Option "data" must be a type Object');
  }
  // ?type=top&key=appkey
  let paramStr: string = '?'

  for (let key in data) {
    paramStr += `${key}=${data[key]}&`
  }

  return appkey ? paramStr + 'key=' + appkey : paramStr.slice(0, -1)
}

function getPageData<T>(data: Array<T>, pageNum: number, count: number): IPageData<T> {
  const retInfo: IPageData<T> = {
    hasMore: true,
    data: []
  }

if (data.length <= count) {
    // data的长度是小于每页条数  证明只有一页
    retInfo.data?.concat(data)
    retInfo.hasMore = false
  } else {
    // 获取页数
    const pageCount: number = Math.ceil(data.length / count)
    
    // 页码大于等于了页数 -> 证明不可能有数据了
    if (pageNum >= pageCount) {
      retInfo.data = null
      retInfo.hasMore = false
    } else {
      // 页码小于页数  多页 -> 切分数据 -> 返回对应页码 对应条数的数据
      retInfo.data = data.splice(pageNum * count, count)
      retInfo.hasMore = true
    }
  }
  
  return retInfo
}

export {
  typeOf,
  formatParams,
  getPageData
}