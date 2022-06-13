import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStoreForSetup = defineStore('useUserStoreForSetup', () => {
  const count = ref(1);
  const isCollapse = ref(false)
  function increment() {
    count.value++;
  }

  function doubleCount() {
    return count.value * 2;
  }

  function changeCollapse() {
    isCollapse.value = !isCollapse.value
  }

  return { count, isCollapse, increment, doubleCount, changeCollapse };
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage, // 默认存储在sessionStorage里
        paths: ['isCollapse'],  // 指定存储state，不写则存储所有
      },
    ]
  }
});
