import { defineStore } from 'pinia';

export const useUserStoreForOption = defineStore('useUserStoreForOption', {
  // 定义state
  state: () => {
    return { count: 1 };
  },
  // 定义action
  actions: {
    increment() {
      this.count++;
    }
  },
  // 定义getters
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
});
