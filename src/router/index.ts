import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
 
// 2. 配置路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../pages/ExtrudeJsonGeometry.vue'),
  },
  {
    path: "/ShapeGeometry",
    component: () => import("../pages/ShapeGeometry.vue"),
  },
  {
    path: "/ExtrudeGeometry",
    component: () => import("../pages/ExtrudeGeometry.vue"),
  },
  {
    path: "/ExtrudeJsonGeometry",
    component: () => import("../pages/ExtrudeJsonGeometry.vue"),
  },
];
// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
 
// 3导出路由   然后去 main.ts 注册 router.ts
export default router