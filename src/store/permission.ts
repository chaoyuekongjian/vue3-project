import { defineStore } from 'pinia';
import { constantRoutes } from '@/router/index'
import { reactive } from 'vue';

export const permission = defineStore('permission', () => {
  const routers = reactive(constantRoutes)

  return { routers };
});
