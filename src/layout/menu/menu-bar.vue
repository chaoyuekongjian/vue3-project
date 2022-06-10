<template>
  <MenuLogo />
  <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#304156" :collapse="isCollapse" @open="handleOpen"
    @close="handleClose">
    <MenuItem :menuList="menuList" />
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import MenuItem from './menu-item.vue'
import MenuLogo from './menu-logo.vue'
let menuList = reactive([
  {
    path: "/dashboard",
    component: "Layout",
    meta: {
      title: "首页",
      icon: "Watch",
      roles: ["sys:manage"]
    },
    children: []
  },
  {
    path: "/system",
    component: "Layout",
    alwaysShow: true,
    name: "system",
    meta: {
      title: "系统管理",
      icon: "Menu",
      roles: ["sys:manage"],
      parentId: 0
    },
    children: [
      {
        path: "/department",
        component: "/system/department/department",
        alwaysShow: false,
        name: "department",
        meta: {
          title: "机构管理",
          icon: "ZoomOut",
          roles: ["sys:dept"],
          parentId: 17
        }
      },
      {
        path: "/userList",
        component: "/system/User/UserList",
        alwaysShow: false,
        name: "userList",
        meta: {
          title: "用户管理",
          icon: "ZoomOut",
          roles: ["sys:user"],
          parentId: 17
        }
      },
      {
        path: "/roleList",
        component: "/system/Role/RoleList",
        alwaysShow: false,
        name: "roleList",
        meta: {
          title: "角色管理",
          icon: "ZoomOut",
          roles: ["sys:role"],
          parentId: 17
        }
      },
      {
        path: "/menuList",
        component: "/system/Menu/MenuList",
        alwaysShow: false,
        name: "menuList",
        meta: {
          title: "权限管理",
          icon: "ZoomOut",
          roles: ["sys:menu"],
          parentId: 17
        }
      }
    ]
  },
  {
    path: "/goods",
    component: "Layout",
    alwaysShow: true,
    name: "goods",
    meta: {
      title: "商品管理",
      icon: "ZoomOut",
      roles: ["sys:goods"],
      parentId: 0
    },
    children: [
      {
        path: "/goodCategory",
        component: "/goods/goodsCategory/goodsCategoryList",
        alwaysShow: false,
        name: "goodCategory",
        meta: {
          title: "商品分类",
          icon: "ZoomOut",
          roles: ["sys:goodsCategory"],
          parentId: 34
        }
      }
    ]
  }
])


const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.el-menu{
  border-right: none;
}
:deep(.el-sub-menu .el-sub-menu__title){
  color: #f4f4f5 !important;
}
:deep(.el-menu .el-menu-item){
  color: #bfcbd9;
}
:deep(.el-menu-item.is-active){
  color: #409eff !important;
}
:deep(.is-opened .el-menu-item){
  background-color: #1f2d3d !important;
}
:deep(.el-menu-item:hover){
  background-color: #001528 !important;
}

</style>