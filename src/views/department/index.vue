<template>
  <my-row>
    <my-col><div class="grid-content bg-purple-dark" /></my-col>
  </my-row>
</template>
<script setup lang='ts'> 
import MyRow from '@/components/element/row.vue'
import MyCol from '@/components/element/col.vue'
import { ref, reactive } from 'vue'
</script>
<style scoped lang='scss'>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
</style>   