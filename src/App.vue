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
  <router-view />
</template>

<style>
</style>
