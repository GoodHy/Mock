// // import Vue from 'vue';
// // import Router from 'vue-router';
// // Vue.use(Router);
// import Layout from '../layout/Layout';

// import DashboardRouter from './dashboard';
// import DataPanelRouter from './dataPanel';
// import CrmRouter from './crm';
// import OperationRouter from './operation';
// import QuoteRouter from './quote';
// import InventoryRouter from './inventory';
// import FinanceRouter from './finance';
// import DeliveryRouter from './delivery';
// import CapitalRouter from './capital';
// import ModelRouter from './model';
// import SynergyRouter from './synergy';
// import CmsRouter from './cms';
// import InsuranceRouter from './insuranceBoard';
// import ActivityRouter from './activity';
// import FinanceBoardRouter from './financeBoard';
// import BoutiqueRouter from './bontique';
// import CreditRouter from './credit';
// import SystemRouter from './system';
// import UnionRouter from './union'; // 新加联盟app路由
// import NewCarSource from './newCarSource';

// const moduleMap = [
//   DashboardRouter, //工作台
//   DataPanelRouter, //数据展板
//   CrmRouter, //CRM管理
//   OperationRouter, //运营管理
//   BoutiqueRouter, //精品商城
//   CreditRouter, //积分管理
//   CmsRouter, //内容管理
//   QuoteRouter, //询价管理
//   InventoryRouter, //进销存
//   FinanceRouter, //财务管理
//   DeliveryRouter, //交车管理
//   CapitalRouter, //资金管理
//   ModelRouter, //车型库
//   SynergyRouter, //任务与消息
//   InsuranceRouter, //保险看板
//   UnionRouter, // 联盟app
//   NewCarSource,
//   ActivityRouter, //活动管理
//   FinanceBoardRouter, //金融看板
//   ActivityRouter, //活动管理
//   FinanceBoardRouter, //金融看板
//   SystemRouter //系统设置
// ];

// export const constantRouterMap = [
//   {
//     path: '/login',
//     component: () => import('@/views/login/index'),
//     hidden: true
//   },
//   {
//     path: '/lock',
//     component: () => import('@/views/lock/index'),
//     name: 'LockPage',
//     hidden: true
//   },
//   { path: '/404', component: () => import('@/views/error/404'), hidden: true },
//   { path: '/403', component: () => import('@/views/error/403'), hidden: true },
//   {
//     path: '/',
//     component: Layout,
//     redirect: '/dashboard',
//     children: moduleMap,
//     meta: { auth: 'main' }
//   },
//   { path: '*', redirect: '/404', hidden: true }
// ];

// export default new VueRouter({
//   //mode: 'history', //BrowserHistory,需要后端支持或nginx配置
//   scrollBehavior: () => ({ y: 0 }),
//   routes: constantRouterMap
// });


import Vue from 'vue'
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
