<template>
  <div class="container">
    <news-list
      v-if="followedList"
      :top="44"
      :newsData="followedList"
    />
    <no-data
      v-if="!followedList"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useFollowedList } from '../compositions'
import NewsList from '../components/NewsList/index.vue'
import NoData from '../components/NoData/index.vue'
import { INewsInfo } from '../typings'


export default defineComponent({
  name: 'MyNews',
  components: {
    NewsList,
    NoData
  },
  setup() {
    const followedList: INewsInfo[] | null = useFollowedList()

    return {
      followedList
    }
  }
})
</script>
