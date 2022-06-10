import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStoreForSetup = defineStore('useUserStoreForSetup', () => {
  const count = ref(1);
  function increment() {
    count.value++;
  }

  function doubleCount() {
    return count.value * 2;
  }

  return { count, increment, doubleCount };
});
