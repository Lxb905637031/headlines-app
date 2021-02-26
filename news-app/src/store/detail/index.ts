import state from './state'
import mutations from './mutations'
import actions from './actions'
import { Module } from 'vuex'
import { IDetailState } from '@/typings'
import { IGobalState } from '@/store'

const detailModel: Module<IDetailState, IGobalState> = {
    namespaced: true,
    state,
    mutations,
    actions
}

export default detailModel