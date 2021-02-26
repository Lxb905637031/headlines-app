<template>
  <div class="container">
    <iframe :src="url" class="frame" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, RouteLocationNormalizedLoaded, useRouter, Router } from 'vue-router'
import { Store, useStore } from 'vuex'
import { INewsInfo } from '../typings'
import { useDetailInfo } from '../compositions'
export default defineComponent({
  name: 'Detail',
  setup() {
    const route: RouteLocationNormalizedLoaded = useRoute()
    const store: Store<any> = useStore()
    const router: Router = useRouter()

    const detailInfo: INewsInfo | undefined = useDetailInfo(store, route)

    if (!detailInfo) {
      router.push('/')
      return
    }
    
    return {
      url: detailInfo.url
    }
  }
})
</script>

<style lang="scss" scoped>
  .container {
    height: 100%;

    .frame {
      width: 100%;
      height: 100%;
      margin-top: .44rem;
      border: 0;
      overflow-y: auto;
    }
  }
</style>