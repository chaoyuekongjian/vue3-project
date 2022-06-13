<template>
  <el-icon class="cursor fa-icons" @click="changeCollapse">
    <component class="icons" :is="isCollapse ? Fold : Expand " />
  </el-icon>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStoreForSetup } from '@/store/useUserStoreForSetup';
import { Fold, Expand } from '@element-plus/icons-vue'

const userStore = useUserStoreForSetup()
const { isCollapse } = storeToRefs(userStore)
const { changeCollapse } = userStore
</script>

<style lang="scss" scoped>
.fa-icons {
  display: flex;
  align-items: center;
  font-size: 24px;
  .icons {
    color: #303133;
  }
}
</style>