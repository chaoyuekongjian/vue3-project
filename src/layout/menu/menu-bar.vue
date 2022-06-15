<template>
  <MenuLogo v-if="!isCollapse" />
  <el-menu 
    :default-active="activeIndex" 
    class="el-menu-vertical-demo" 
    background-color="#304156" 
    :collapse="isCollapse"
    @open="handleOpen" 
    @close="handleClose"
    router
  >
    <MenuItem v-for="route in routers" :key="route.path" :item="route" :base-path="route.path" />
  </el-menu>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import MenuItem from './menu-item.vue'
import MenuLogo from './menu-logo.vue'
import { storeToRefs } from 'pinia'
import { useUserStoreForSetup } from '@/store/useUserStoreForSetup'
import { permission } from '@/store/permission'

const userStore = useUserStoreForSetup()
const { isCollapse } = storeToRefs(userStore)

const { routers } = storeToRefs(permission());

const route = useRoute()
const activeIndex = computed(() => {
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu as string
  }
  return path
})

watch(() => route.path, (val) => console.log(val))

const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  border-right: none;
}

:deep(.el-sub-menu .el-sub-menu__title) {
  color: #f4f4f5 !important;
}

:deep(.el-menu .el-menu-item) {
  color: #bfcbd9;
}

:deep(.el-menu-item.is-active) {
  color: #409eff !important;
}

:deep(.is-opened .el-menu-item) {
  background-color: #1f2d3d !important;
}

:deep(.el-menu-item:hover) {
  background-color: #001528 !important;
}
</style>