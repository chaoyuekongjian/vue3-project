<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="item in tabs" :to="item.path" :key="item.path">{{ item.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, Ref, watch } from 'vue';
import { RouteLocationMatched, useRoute } from 'vue-router'

const tabs: Ref<RouteLocationMatched[]> = ref([])
const route = useRoute()
const getBreadcrumb = () => {
  let matched = route.matched.filter(item => item.meta && item.meta.title)
  const first = matched[0]
  // if (first.path !== '/dashboard') {
  //   matched = [{ path: '/dashboard', meta: { title: '首页' } } as any].concat(matched)
  // }
  // 设置面包屑导航数据
  tabs.value = matched
}
getBreadcrumb()
watch(() => route.path, () => getBreadcrumb())
</script>
