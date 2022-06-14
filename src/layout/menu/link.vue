<template>
  <component :is="type" v-bind="linkProps(to)">
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

}
</script>
<style scoped lang='scss'>
</style>