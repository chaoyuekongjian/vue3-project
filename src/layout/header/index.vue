<template>
  <div>头部</div>
  {{ count }}
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStoreForSetup } from '@/store/useUserStoreForSetup';

const userStore = useUserStoreForSetup()
const { count } = storeToRefs(userStore)
</script>