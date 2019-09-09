import * as UrlList from './network/urlList';

// 打包环境 dev test prod testSyncProd
const environment = 'http_env';

/*** 默认环境
 * 开发环境 dev
 * 测试环境 test
 * 测试环境无版本 testSyncProd
 * 预发布版本 pre
 * 正式版本 prod
 ***/

if (environment) env = environment;
let env = 'dev';
const devConfig = {
  isDev: false, //是否为调试模式(内部控制)
  printLog: true, //是否打印Log开关
  workFlow: true, //是否启用任务流
  systemID: '40288a486368a12101636bfc08e00001', //ERP测试系统ID
  tableEmptyTag: '--', //ERP表格空字符占位符
  enableRouteAuth: true, //是否启用路由权限控制
  enableOperationAuth: true, //是否启用操作权限控制
  redirect_uri: 'http://lottery.liritian.top/',
  socketUrl: 'ws://192.168.3.200:8402/sysMessage',
  statisticsSocketUrl: 'ws://192.168.3.200:9701/message',
  appid: 'dingoavwlbokwrk1ulvkoe',
  corpId: 'ding7d0358e5937f35a535c2f4657eb6378f',
  usePwdLogin: true,
  ...UrlList.devPublicUrl //根据不同环境加载不同URL组
};

let testPublicUrl = UrlList.testPublicUrl;
if (env === 'testSyncProd') testPublicUrl = UrlList.testPublicUrl2;
const testConfig = {
  isDev: true, //是否为调试模式(内部控制)
  printLog: true, //是否打印Log开关
  workFlow: true, //是否启用任务流
  systemID: '40288a486368a12101636bfc08e00001', //ERP测试系统ID
  tableEmptyTag: '--', //ERP表格空字符占位符
  enableRouteAuth: true, //是否启用路由权限控制
  enableOperationAuth: true, //是否启用操作权限控制
  redirect_uri: 'http://event.itsmycar.cn/erp2/erp/',
  socketUrl: 'ws://192.168.3.210:8402/sysMessage',
  statisticsSocketUrl: 'ws://testws.erp2.itsmycar.cn:7775/message',
  appid: 'dingoajdwasyhbo5k8c3uz',
  corpId: 'ding16fac76f830118c1',
  usePwdLogin: true,
  ...testPublicUrl //根据不同环境加载不同URL组
};

const prodConfig = {
  isDev: false, //是否为调试模式(内部控制)
  printLog: false, //是否打印Log开关
  workFlow: true, //是否启用任务流
  systemID: '40288a486368a12101636bfc08e00001', //ERP测试系统ID
  tableEmptyTag: '--', //ERP表格空字符占位符
  enableRouteAuth: true, //是否启用路由权限控制
  enableOperationAuth: true, //是否启用操作权限控制
  redirect_uri: 'http://erp2.yiautos.com',
  socketUrl: 'ws://47.96.177.8:8402/sysMessage',
  statisticsSocketUrl: 'ws://47.96.24.156:9701/message',
  appid: 'dingoamdhz4oio11rl6wou',
  corpId: 'ding16fac76f830118c1',
  usePwdLogin: false,
  ...UrlList.prodPublicUrl //根据不同环境加载不同URL组
};

const preConfig = {
  isDev: false, //是否为调试模式(内部控制)
  printLog: true, //是否打印Log开关
  workFlow: true, //是否启用任务流
  systemID: '40288a486368a12101636bfc08e00001', //ERP测试系统ID
  tableEmptyTag: '--', //ERP表格空字符占位符
  enableRouteAuth: true, //是否启用路由权限控制
  enableOperationAuth: true, //是否启用操作权限控制
  redirect_uri: 'http://pre.erp.yiautos.com',
  appid: 'dingoamdhz4oio11rl6wou',
  corpId: 'ding16fac76f830118c1',
  usePwdLogin: false,
  ...UrlList.prodPublicUrl //根据不同环境加载不同URL组
};

//根据环境配置不同的配置
const conf =
  env === 'dev'
    ? devConfig
    : env === 'test' || env === 'testSyncProd'
      ? testConfig
      : env === 'prod'
        ? prodConfig
        : env === 'pre'
          ? preConfig
          : null;
export default conf;
