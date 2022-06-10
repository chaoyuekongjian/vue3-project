import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: 'user', // id必须，需要唯一
  state: () => {
    return {
      name: '张三'
    }
  },
  getters: {
    getFullName: (state) => {
      return state.name + '丰'
    }
  },
  actions: {
    updateName(name: string): void {
      this.name = name
    }
  },
  persist: {
    enabled: true
  }
})
