<script setup lang="ts">
import { storeToRefs } from 'pinia';
import appStore from '@/store';

// setup composition API模式
const { count } = storeToRefs(appStore.useUserStore);
const { increment, doubleCount } = appStore.useUserStore;
</script>

<template>
  {{ doubleCount() }}
  <router-view />
</template>

<style>
</style>
