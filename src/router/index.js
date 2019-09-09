import Vue from "vue";
import VueRouter from "vue-router";

import Layout from '../layout/index';
import HelloWorld from "./inventory";

const moduleMap = [HelloWorld];
export const constantRouterMap = [
  {
    path: "/",
    component: Layout,
    redirect: "/hello",
    children: moduleMap,
    meta: { auth: "main" }
  }
  // { path: '*', redirect: '/404', hidden: true }
];

export default new VueRouter({
  // mode: 'history', //BrowserHistory,需要后端支持或nginx配置
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

// export default new VueRouter({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })