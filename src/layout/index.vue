<template>
  <el-container class="layout">
    <el-aside width="auto" class="asside">
      <MenuBar />
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header />
      </el-header>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from './header/index.vue'
import MenuBar from './menu/menu-bar.vue'
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  .asside {
    background-color: rgb(48, 65, 86);
  }
  .header {
    height: 50px;
    border-bottom:1px solid #e5e5e5;
    display: flex;
    align-items: center;
  }
}
</style>