/*
* ERP的请求地址列表,根据当前环境切换
* @author Lihao
* */
import { apiDev, apiTest, apiProd, apiPre } from './config';

//开发版公网IP-URL, 如果需要根据后端分支访问,需要在后面加上版本号
export const devPublicUrl = {
  systemService: apiDev.authorizeService({ port: '7775' }),
  crmService: apiDev.crmService({ port: '7775', version: 'v1-0-0' }),
  modelService: apiDev.modelsService({ port: '7775' }),
  baseService: apiDev.baseService({ port: '7775', version: 'v2-11-0' }),
  authService: apiDev.portService({ port: '7775' }),
  erpService: apiDev.erpService({ port: '7775', version: 'v2-14-5' }),
  insuranService: apiDev.erpService({ port: '7775', version: 'v2-14-5' }),
  synergyService: apiDev.baseService({ port: '7775' }),
  scoreService: apiDev.scoreService({ port: '7775' }),
  boutiqueService: apiDev.boutiqueService({ port: '7775' }),
  statisticsService: apiDev.statisticsService({ port: '7775' }),
  insuranceService: apiDev.erpService({ port: 7775, version: 'v2-14-5' }),
  cmsService: apiDev.clientService({ port: '7775' }),
  activeService: 'http://devzuul.erp2.itsmycar.cn:7775/zuul/cms', //本地暂用测试地址
  exportService: 'http://devzuul.erp2.itsmycar.cn:7775/zuul/cms', //请于当前运行环境保持一致,此为单独导出的接口
  FinancialList: 'http://devzuul.erp2.itsmycar.cn:7775/zuul/erp', // 金融展板调试接口
  contryAdimin: 'http://devzuul.erp2.itsmycar.cn:77775/zuul/v2-11-0/base', // 区县管理
  lippoGroup: 'http://devzuul.erp2.itsmycar.cn:7775/zuul/cms', //助力夺宝服务
  unionService: 'http://devzuul.erp2.itsmycar.cn:7775/zuul/v1-0-0/union', // 联盟app
  userService:'http://localhost:8081',
  __version__: ({ server, version }) => apiDev[server]({ version })
};

//测试版公网IP-URL
export const testPublicUrl = {
  systemService: apiTest.authorizeService({ port: 7775 }),
  crmService: apiTest.crmService({ port: 7775, version: 'v2-17-0' }),
  modelService: apiTest.modelsService({ port: 7775, version: 'v1-0-0' }),
  baseService: apiTest.baseService({ port: 7775, version: 'v2-11-0' }),
  authService: apiTest.portService({ port: 7775 }),
  erpService: apiTest.erpService({ port: 7775, version: 'v2-17-0' }),
  cmsService: apiTest.clientService({ port: 7775 }),
  insuranceService: apiTest.erpService({ port: 7775, version: 'v2-17-0' }),
  synergyService: apiTest.baseService({ port: 7775, version: 'v2-11-0' }),
  scoreService: apiTest.scoreService({ port: 7775 }),
  boutiqueService: apiTest.boutiqueService({ port: 7775 }),
  statisticsService: apiTest.statisticsService({ port: 7775 }),
  activeService: 'http://testzuul.erp2.itsmycar.cn:7775/zuul/cms', //本地暂用测试地址
  exportService: 'http://testzuul.erp2.itsmycar.cn:7775/zuul/cms', //请于当前运行环境保持一致,此为单独导出的接口
  FinancialList: apiTest.erpService({ port: 7775, version: 'v2-17-0' }), // 金融展板调试接口
  contryAdimin: apiTest.baseService({ port: 7775, version: 'v2-11-0' }), // 区县管理
  lippoGroup: 'http://testzuul.erp2.itsmycar.cn:7775/zuul/cms', //助力夺宝服务
  unionService: 'http://testzuul.erp2.itsmycar.cn:7775/zuul/v1-0-0/union', // 联盟app
  __version__: ({ server, version }) => apiTest[server]({ version })
};

export const testPublicUrl2 = {
  systemService: apiTest.authorizeService(),
  crmService: apiTest.crmService(),
  modelService: apiTest.modelsService(),
  baseService: apiTest.baseService(),
  authService: apiTest.portService(),
  erpService: apiTest.erpService(),
  cmsService: apiTest.clientService(),
  insuranceService: apiTest.erpService(),
  synergyService: apiTest.baseService(),
  scoreService: apiTest.scoreService(),
  boutiqueService: apiTest.boutiqueService(),
  statisticsService: apiTest.statisticsService(),
  __version__: ({ server, version }) => apiTest[server]({ version })
};

//发布版公网地址-URL
export const prodPublicUrl = {
  systemService: apiProd.authorizeService(),
  crmService: apiProd.crmService(),
  modelService: apiProd.modelsService(),
  baseService: apiProd.baseService(),
  authService: apiProd.portService(),
  erpService: apiProd.erpService(),
  insuranceService: apiProd.erpService(),
  synergyService: apiProd.baseService(),
  scoreService: apiProd.scoreService(),
  boutiqueService: apiProd.boutiqueService(),
  statisticsService: apiProd.statisticsService(),
  cmsService: apiProd.clientService(),
  activeService: apiProd.cmsService(), //本地暂用测试地址
  exportService: apiProd.cmsService(), //请于当前运行环境保持一致,此为单独导出的接口
  FinancialList: apiProd.erpService(), // 金融展板调试接口
  contryAdimin: apiProd.baseService(), // 区县管理
  lippoGroup: apiProd.cmsService(), //助力夺宝服务
  __version__: ({ server, version }) => apiProd[server]({ version })
};

//预发布版公网地址-URL
export const prePublicUrl = {
  systemService: apiPre.authorizeService(),
  crmService: apiPre.crmService(),
  modelService: apiPre.modelsService(),
  baseService: apiPre.baseService(),
  authService: apiPre.portService(),
  __version__: ({ server, version }) => apiPre[server]({ version })
};
