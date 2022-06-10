<template>
  <template v-for="menu in menuList" :key="menu.path">
    <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
    <!-- 存在下级目录 -->
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </template>
      <menu-item :menuList="menu.children"></menu-item>
    </el-sub-menu>
    <el-menu-item v-else :index="menu.path" style="color: #f4f4f5">
      <!-- 不存在下级目录 -->
      <el-icon><AddLocation /></el-icon>
      <span>{{ menu.meta.title }}</span>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
defineProps(['menuList'])
</script>