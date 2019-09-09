import Container from '../layout/index';
import HelloWorld from '@/components/HelloWorld'
export default {
    path: '/',
    component: Container,
    redirect: '/hello',
    children: [
      {
        path: 'hello',
        name: 'financeReceipt',
        component: HelloWorld,
        meta: { title: '收款单' }
      }
    ]
};
