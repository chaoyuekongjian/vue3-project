<template>
  <div class="group">
    <p class="text-gray-500 group-hover:text-blue-500">Click me</p>
  </div>
  <div class="p-1"></div>
  <kot-button>Click Me</kot-button>
  <kot-card>Click Me</kot-card>
  <div class="bg-custom-gray h-40 text-custom-gray text-xs">
    <div class="w-1226 mx-auto clear-both">
      <ul class="float-left leading-10">
        <li class="float-left"><a class="px-7 py-0 border-r border-solid border-custom-gray2 hover:text-white">小米商城</a></li>
        <li class="float-left"><a class="px-7 py-0 border-r border-solid border-custom-gray2 hover:text-white">MIUI</a></li>
        <li class="float-left"><a class="px-7 py-0 border-r border-solid border-custom-gray2 hover:text-white">IoT</a></li>
        <li class="float-left"><a class="px-7 py-0 border-r border-solid border-custom-gray2 hover:text-white">云服务</a></li>
        <li class="float-left"><a class="px-7 py-0 border-r border-solid border-custom-gray2 hover:text-white">天星数科</a></li>
        <li class="float-left"><a class="px-7 py-0 border-r border-solid border-custom-gray2 hover:text-white">有品</a></li>
        <li class="float-left"><a class="px-7 py-0 border-r border-solid border-custom-gray2 hover:text-white">小爱开放平台</a></li>
        <li class="float-left"><a class="px-7 py-0 border-r border-solid border-custom-gray2 hover:text-white">企业团购</a></li>
        <li class="float-left"><a class="px-7 py-0 border-r border-solid border-custom-gray2 hover:text-white">资质证照</a></li>
        <li class="float-left"><a class="px-7 py-0 border-r border-solid border-custom-gray2 hover:text-white">协议规则</a></li>
        <li class="float-left"><a class="px-7 py-0 border-r border-solid border-custom-gray2 hover:text-white">下载app</a></li>
        <li class="float-left"><a class="px-7 py-0 border-r border-solid border-custom-gray2 hover:text-white">智能生活</a></li>
        <li class="float-left"><a class="px-7 py-0 hover:text-white">Select Location</a></li>
      </ul>
      <div class="float-right">
        <!-- 登录、注册、消息通知 -->
        <ul class="float-left leading-10">
          <li class="float-left"><a class="px-7 py-0 border-r border-solid border-custom-gray2 hover:text-white">登录</a></li>
          <li class="float-left"><a class="px-7 py-0 border-r border-solid border-custom-gray2 hover:text-white">注册</a></li>
          <li class="float-left"><a class="px-7 py-0 border-r">消息通知</a></li>
        </ul>
        <!-- 购物车 -->
        <div class="float-left bg-custom-gray2 w-120 h-40 ml-13 relative">
          <a class="w-full h-full block text-center leading-10">
            <i class="iconfont i-car mr-1"></i>
            <span>购物车（0）</span>
          </a>
          <div class="bg-white w-320 h-100 absolute right-0 top-10 border border-solid border-gray-300 border-t-0 leading-100 z-50">
            购物车中还没有商品，赶紧选购吧！</div>
      </div>
    </div>
  </div>
</div></template>

<script lang="ts" setup>
// 在tailwindcss中，变体允许你根据元素不同状态来应用原子类
// 变体的表现形式一般为xx原子类名，表示当元素处于xx状态的时候，应用后面的原子类
// 常见的有hover focuse active visited

</script>
