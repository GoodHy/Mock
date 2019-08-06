// import Container from '../layout/MainContainer';

// export default {
//   path: 'inventory',
//   component: Container,
//   name: 'Inventory',
//   meta: { title: '进销存', icon: 'inventory', auth: 'inventory-all' },
//   redirect: '/inventory/book/request',
//   children: [
//     {
//       path: 'logistics',
//       component: Container,
//       name: '物流单',
//       redirect: '/views/logistics/logisticsOrder',
//       meta: { title: '物流单', auth: 'logistics' },
//       children: [
//         {
//           path: 'logisticsOrder',
//           name: 'LogisticsOrder',
//           component: () => import('@/views/logistics/logisticsOrder'),
//           meta: { title: '物流单' }
//         },
//         {
//           path: 'logisticsProviders',
//           name: 'LogisticsProviders',
//           component: () => import('@/views/logistics/logisticsProviders'),
//           meta: { title: '物流商管理' }
//         },
//         {
//           path: 'logisticsFee',
//           name: 'LogisticsFee',
//           component: () => import('@/views/logistics/logisticsFee'),
//           meta: { title: '物流运费记录' }
//         }
//       ]
//     },
//     {
//       path: 'book',
//       name: '订车管理',
//       component: Container,
//       meta: { title: '订车管理', auth: 'inventory-bookcar-all' },
//       redirect: '/inventory/book/request',
//       children: [
//         {
//           path: 'request',
//           name: 'BookACarRequest',
//           component: () => import('@/views/inventory/book/request'),
//           meta: { title: '订车需求' }
//         },
//         {
//           path: 'order',
//           name: 'BookACarOrder',
//           component: () => import('@/views/inventory/book/order'),
//           meta: { title: '订车单' }
//         },
//         {
//           path: 'resource',
//           name: 'BookACar-resource',
//           component: () => import('@/views/inventory/book/resource'),
//           meta: { title: '资源方管理' }
//         }
//       ]
//     },
//     {
//       path: 'storage',
//       component: Container,
//       name: '库存管理',
//       redirect: '/sells/inventory/storage',
//       meta: { title: '库存管理', icon: 'customer', auth: 'inventory' },
//       children: [
//         {
//           path: 'storage',
//           name: 'Storage',
//           component: () => import('@/views/sells/inventory/storage'),
//           meta: { title: '仓库管理' }
//         },
//         {
//           path: 'policy',
//           name: 'policy',
//           component: () => import('@/views/sells/inventory/businessPolicy'),
//           meta: { title: '商务政策' }
//         },
//         {
//           path: 'entry',
//           name: 'Entry',
//           component: () => import('@/views/sells/inventory/entry'),
//           meta: { title: '入库单' }
//         },
//         {
//           path: 'query-repertory',
//           name: 'QueryRepertory',
//           component: () => import('@/views/sells/inventory/repertory'),
//           meta: { title: '库存查询' }
//         },
//         {
//           path: 'check',
//           name: 'Check',
//           component: () => import('@/views/sells/inventory/check'),
//           meta: { title: '盘点单' }
//         }
//       ]
//     }
//   ]
// };
