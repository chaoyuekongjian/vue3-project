<template>
  <div class="w-32 h-4 flex justify-between">
    <!-- 粉色方块 -->
    <div class="w-4 h-4 animate-slide">
      <div class="absolute w-4 h-4 rounded-[15%] shadow-custom bg-pink-500"></div>
    </div>
    <!-- 蓝色方块 -->
    <div class="flex justify-between w-24">
      <div class="w-4 h-4 animate-jump-off-1">
        <div class="absolute w-4 h-4 rounded-[15%] shadow-custom bg-blue-500 animate-jump-down-1 brightness-100"></div> 
      </div> 
      <div class="w-4 h-4 animate-jump-off-2">
        <div class="absolute w-4 h-4 rounded-[15%] shadow-custom bg-blue-500 animate-jump-down-2 brightness-115"></div> 
      </div> 
      <div class="w-4 h-4 animate-jump-off-3">
        <div class="absolute w-4 h-4 rounded-[15%] shadow-custom bg-blue-500 animate-jump-down-3 brightness-130"></div> 
      </div> 
      <div class="w-4 h-4 animate-jump-off-4">
        <div class="absolute w-4 h-4 rounded-[15%] shadow-custom bg-blue-500 animate-jump-down-4 brightness-145"></div> 
      </div> 
    </div>  
  </div>
</template>

<script setup lang="ts">
// 在使用原声css来书写效果的时候，使用到了伪元素选择器
/**
 * 
 */
</script>