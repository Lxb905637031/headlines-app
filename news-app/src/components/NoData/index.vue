<template>
    <div class="no-data">
        -没有更多数据-
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'NoData'
})
</script>
<style lang="scss" scoped>
  .no-data {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: .16rem;
    color: #999;
  }
</style>
