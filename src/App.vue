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
  <router-view />
</template>

<style>
</style>
