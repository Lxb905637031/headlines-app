/*eslint-disable */
import { IHomeState, IDetailState } from '@/typings'
import { createStore } from 'vuex'
import homeModel from './home/index'
import detailModel from './detail/index'

export interface IGobalState {
  home: IHomeState,
  detail: IDetailState
}

export default createStore<IGobalState>({
  modules: {
    home: homeModel,
    detail: detailModel
  }
})
