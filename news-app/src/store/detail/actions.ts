import { INewsInfo } from '@/typings'
import * as actionType from './axtionType'
import { Commit } from 'vuex'

export default {
    [actionType.SET_CURRENT_NEWS]({ commit }: { commit: Commit }, newsInfo: INewsInfo) {
        commit(actionType.SET_CURRENT_NEWS, newsInfo)
    }
}