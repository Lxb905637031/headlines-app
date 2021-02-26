import state from './state'
import mutations from './mutations'
import actions from './actions'

import { IHomeState } from '../../typings'
import { Module } from 'vuex'
import { IGobalState } from '../index'

const homeModel: Module<IHomeState, IGobalState> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default homeModel