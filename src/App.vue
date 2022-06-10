<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/user';

const userStore = useUserStore()
const { name, getFullName } = storeToRefs(userStore)

function handleClick() {
  userStore.updateName('李四')
}
</script>

<template>
  <div>{{ name }}</div>
  <div>{{ getFullName }}</div>
  <el-button @click="handleClick">add</el-button>
  <router-view />
</template>

<style>
</style>
