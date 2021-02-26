<template>
  <div class="container">
    <nav-bar
      @setCurrentType="setCurrentType"
    />
    <skeleton
      :top="82"
      v-if="isSkLoading"
    />
    <news-list
      :top="82"
      :newsData="newsList"
      v-show="!isSkLoading"
    />
  </div>
</template>

<script lang="ts">
import { ComputedRef, defineComponent, ref, onMounted, watch } from 'vue'
import NavBar from '../components/NavBar/index.vue'
import NewsList from '../components/NewsList/index.vue'
import Skeleton from '../components/Skeleton/index.vue'
import { Store, useStore } from 'vuex'
import { INewsInfo, NAV_TYPES } from '../typings'
import { useNavType, useNewsList } from '../compositions/index'
export default defineComponent({
  name: 'Home',
  components: {
    NavBar,
    NewsList,
    Skeleton
  },
  setup() {
    const store: Store<any> = useStore()
    // 选择NavBar类型
    const setCurrentType: (type: NAV_TYPES) => void = useNavType(store)
    // 新闻数据列表
    const newsList: ComputedRef<INewsInfo[]> = useNewsList(store)
    // 骨架屏显示与否的变量
    const isSkLoading = ref<boolean>(true)

    onMounted(() => {
      setTimeout(() => {
        isSkLoading.value = false
      },2000)
    })

    // 新闻类型改变,骨架屏
    watch(() => {
      return store.state.home.currentType
    }, () => {
      isSkLoading.value = true
      setTimeout(() => {
        isSkLoading.value = false
      },200)
    })


    return {
      setCurrentType,
      newsList,
      isSkLoading
    }
  }
})
</script>
