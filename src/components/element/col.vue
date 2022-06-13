<template>
  <div class="el-col el-col-24">
    <slot></slot>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
defineProps({
  span: {
    type: Number,
    default: 24
  }
})
</script>
<style scoped lang='scss'>
.el-col-24 {
  width: 100%;
}
</style>