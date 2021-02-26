import { INewsInfo } from '@/typings'

function useFollowedList(): INewsInfo[] | null {
    const followedList: INewsInfo[] = JSON.parse(localStorage.getItem('newsList') || '[]')

    if (!followedList.length) {
        return null
    }

    return followedList
}

export default useFollowedList
