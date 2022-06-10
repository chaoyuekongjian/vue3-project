<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStoreForSetup } from '@/store/useUserStoreForSetup';

const userStore = useUserStoreForSetup()
const { count } = storeToRefs(userStore)
// setup composition API模式
const { increment } = userStore;

function handleClick() {
  increment()
}
</script>

<template>
  {{ count }}
  <el-button @click="handleClick">add</el-button>
  <router-view />
</template>

<style>
</style>
