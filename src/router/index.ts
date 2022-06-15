import { createRouter, createWebHistory, RouteMeta, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue'
import { defineComponent } from 'vue';

type Component<T = any> = 
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

// @ts-ignore
interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'>{
  name?: string;
  meta?: RouteMeta;
  path: string;
  redirect?: string;
  component?: Component | string;
  alwaysShow?: boolean;
  hidden?: boolean;
  children?: AppRouteRecordRaw[]
}

export const constantRoutes: Array<AppRouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/layout/dashboard/index.vue"),
        name: "dashboard",
        meta: {
          title: "首页",
          icon: "House",
        },
      },
    ],
  },
  {
    path: "/todo",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/todo/index.vue"),
        name: "todo",
        meta: {
          title: "制作",
          icon: "House",
        },
      },
    ],
  },
  {
    path: "/system",
    component: Layout,
    name: "system",
    meta: {
      title: "系统管理",
      icon: "Grid",
      roles: ["sys:manage"],
      parentId: 0,
    },
    children: [
      {
        path: "",
        component: () => import("@/views/department/index.vue"),
        name: "department",
        meta: {
          title: "机构管理",
          icon: "Menu",
          roles: ["sys:dept"],
        },
      },
      {
        path: "userList",
        component: () => import("@/views/user/user-list.vue"),
        name: "userList",
        meta: {
          title: "用户管理",
          icon: "Menu",
          roles: ["sys:user"],
        },
      },
      {
        path: "roleList",
        component: () => import("@/views/role/role-list.vue"),
        name: "roleList",
        meta: {
          title: "角色管理",
          icon: "Menu",
          roles: ["sys:role"],
        },
      },
      {
        path: "menuList",
        component: () => import("@/views/menu/menu-list.vue"),
        name: "menuList",
        meta: {
          title: "权限管理",
          icon: "Menu",
          roles: ["sys:menu"],
        },
      },
    ],
  },
  {
    path: "/goods",
    component: Layout,
    name: "goods",
    meta: {
      title: "商品管理",
      icon: "Menu",
      roles: ["sys:goods"],
    },
    children: [
      {
        path: "index",
        component: () => import("../views/goods/index.vue"),
        name: "goodCategory",
        meta: {
          title: "商品分类",
          icon: "Menu",
          roles: ["sys:goodsCategory"],
        },
      },
    ],
  },
  {
    path: "/systemConfig",
    component: Layout,
    name: "systemConfig",
    alwaysShow: true,
    meta: {
      title: "系统工具",
      icon: "Menu",
      roles: ["sys:systemConfig"],
    },
    children: [
      {
        path: "document",
        component: () => import("../views/system-document/index.vue"),
        name: "http://localhost:8089/swagger-ui/index.html",
        meta: {
          title: "接口文档",
          icon: "Menu",
          roles: ["sys:document"],
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes as RouteRecordRaw[],
});

export default router;
