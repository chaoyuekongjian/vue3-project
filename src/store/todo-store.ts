import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const todoStore = defineStore('todoStore', () => {
  const todos = ref<string[]>([])

  function saveTodos(val: string) {
    todos.value.push(val)
  }

  return { todos, saveTodos };
});
