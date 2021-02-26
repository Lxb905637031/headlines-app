<template>
  <div class="container">
    <news-header />
    <router-view v-slot="{ Component }">
      <keep-alive include="Home">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import NewsHeader from './components/Header/index.vue'
export default defineComponent({
  name: 'App',
  components: {
    NewsHeader
  }
})
</script>
