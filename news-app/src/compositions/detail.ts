import { IGobalState } from '@/store'
import { Store } from 'vuex'
import { RouteLocationNormalizedLoaded } from 'vue-router'
import { INewsInfo } from '@/typings'
import { SET_CURRENT_NEWS } from '@/store/detail/axtionType'
import { computed } from 'vue'

function useDetailInfo(store: Store<IGobalState>, route: RouteLocationNormalizedLoaded): INewsInfo | undefined {
    // 新闻唯一的key
    const uniquekey: string = route.params.uniquekey as string
    // 新闻详情页跳转的来源
    const pageFrom: string = route.params.pageFrom as string
    
    const newsData: INewsInfo[] = pageFrom === 'MyNews'
        ? JSON.parse(localStorage.getItem('newsList') || '[]') 
        : store.state.home.newsList.news

    const newsInfo: INewsInfo | undefined = newsData.find((item: INewsInfo) => {
        return item.uniquekey === uniquekey
    })

    store.dispatch(`detail/${SET_CURRENT_NEWS}`, newsInfo)

    return newsInfo
}

// 点击收藏
function useNewsFollow(
    store: Store<IGobalState>,
    callback: (status: boolean) => void
): void {
    // state取出当前的新闻详情信息
    const currentNew: INewsInfo = computed(() => store.state.detail.currentNews).value
    // localStorage取出收藏的新闻列表
    let newsList: INewsInfo[] = JSON.parse(localStorage.getItem('newsList') || '[]')
    // 最终返回收藏与否状态
    let followStatus = false

    if (newsList.length) {
        const isExist: INewsInfo | undefined = newsList.find((item: INewsInfo) => item.uniquekey === currentNew.uniquekey)
        // 信息存在
        if (isExist) {
            newsList = newsList.filter((item: INewsInfo) => item.uniquekey !== currentNew.uniquekey)
            // 取消收藏
            followStatus = false
        } else {
            // 不存在当前新闻信息则添加
            newsList.push(currentNew)
            // 加入收藏
            followStatus = true
        }
    } else {
        // 不存在当前新闻信息则添加
        newsList.push(currentNew)
        // 加入收藏
        followStatus = true        
    }
    // 
    localStorage.setItem('newsList', JSON.stringify(newsList))
    // 执行回调
    callback(followStatus)
}

// 检查是否收藏
function useFollowedCheck(
    route: RouteLocationNormalizedLoaded,
    callback: (status: boolean) => void
): void {
    const uniquekey = route.params.uniquekey
    const pageFrom = route.params.from

    // 收藏列表页进入详情页为收藏状态
    if (pageFrom === 'MyNew') {
        callback(true)
        return
    }

    const newsList: INewsInfo[] = JSON.parse(localStorage.getItem('newsList') || '[]')

    // 未收藏状态
    if (!newsList.length) {
        callback(false)
        return
    }

    // 检查当前uniquekey是否存在newsList某一项新闻中
    const isExist: INewsInfo | undefined = newsList.find((item: INewsInfo) => item.uniquekey === uniquekey)

    // 携带状态传入回调
    callback(isExist ? true : false)
}

export {
    useDetailInfo,
    useNewsFollow,
    useFollowedCheck
}