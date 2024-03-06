<template>
  <component :is="type">
    <slot />
  </component>
</template>
<script setup lang='ts'>
import { ref, reactive, computed } from 'vue'
import { isExternalLink } from '@/utils/validate'
const props = defineProps({
  to: {
    type: String,
    required: true
  }
})

const isDataExternal = computed(() => {
  return isExternalLink(props.to)
})

const type = computed(() => {
  if (isDataExternal) {
    return 'a'
  }
  return 'router-link'
})

function linkProps(to: String) {
  console.log(to)
}
</script>
<style scoped lang='scss'>
</style>