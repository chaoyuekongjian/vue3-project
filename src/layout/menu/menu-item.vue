<template>
  <template v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <AppLink v-if="onlyOneChild.meta" :to="getFullPath(onlyOneChild.path)">
        <el-menu-item :index="getFullPath(onlyOneChild.path)" style="color: #f4f4f5">
          <!-- 不存在下级目录 -->
          <el-icon><component class="icons" :is="onlyOneChild.meta.icon" /></el-icon>
          <span>{{ onlyOneChild.meta.title }}</span>
        </el-menu-item>
      </AppLink>
    </template>
    <el-sub-menu v-else :index="getFullPath(item.path)">
      <template #title>
        <template v-if="item.meta">
          <el-icon>
            <component class="icons" :is="item.meta.icon" />
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
      </template>
      <MenuItem v-for="route in item.children" :key="route.path" :item="route" :base-path="getFullPath(route.path)" />
    </el-sub-menu>
    <!-- <el-menu-item v-else :index="item.path" style="color: #f4f4f5">
      <el-icon><component class="icons" :is="item.meta.icon" /></el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item> -->
  </template>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import MenuItem from './menu-item.vue'
import AppLink from './link.vue'
import { resolveRoutePath } from '@/utils/validate';
const props = defineProps(['item', 'basePath'])

let onlyOneChild: any = ref({})
function hasOneShowingChild(children: any[], parent: any): boolean {
  children = children || []
  const showingChildren = children.filter(item => {
    if (item.hidden) {
      return false
    } else {
      onlyOneChild.value = item
      return true
    }
  })
  
  if (showingChildren.length === 1) {
    return true
  }

  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
    return true
  }

  return false
}

function getFullPath(path: string): string {
  return resolveRoutePath(props.basePath, path)
}

</script>

<style scoped>
.icons{
  width: 24px;
  height: 18px;
}
</style>
