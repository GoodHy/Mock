/**
 * User: retro.
 * Time: 28/4/19
 */
//const devUrl = 'http://cydzuul.erp2.itsmycar.cn';
//const devAuthUrl = 'http://cydoauth.erp2.itsmycar.cn';
const devUrl = 'http://devzuul.erp2.itsmycar.cn';
const devAuthUrl = 'http://devoauth.erp2.itsmycar.cn';
const testUrl = 'http://testzuul.erp2.itsmycar.cn';
const testAuthUrl = 'http://testoauth.erp2.itsmycar.cn';
const prodUrl = 'https://api.erp.yiautos.com';
const prodAuthUrl = 'https://oauth.erp.yiautos.com';
const preUrl = 'https://pre.api.erp.yiautos.com';
const preAuthUrl = 'https://pre.oauth.erp.yiautos.com';

// 各个环境配置
export const apiDev = apiFunc({
  newUrl: devUrl,
  auth: devAuthUrl
});
export const apiTest = apiFunc({
  newUrl: testUrl,
  auth: testAuthUrl
});
export const apiProd = apiFunc({
  newUrl: prodUrl,
  auth: prodAuthUrl,
  noNewPort: true
});
export const apiPre = apiFunc({
  newUrl: preUrl,
  auth: preAuthUrl,
  noNewPort: true
});

let PORT = '7775';

// 通过newUrl获取对应的服务地址
function apiFunc({ newUrl, auth, noNewPort, noNewZuul }) {
  return {
    authorizeService: ({
      url,
      port = PORT,
      zuul = 'zuul',
      version,
      server = 'authorize',
      noPort,
      noZuul
    } = {}) => {
      return serverCalc({
        newUrl: url || newUrl,
        port,
        zuul,
        version,
        server,
        noNewPort: typeof noPort === 'boolean' ? noPort : noNewPort,
        noNewZuul: typeof noZuul === 'boolean' ? noZuul : noNewZuul
      });
    },
    crmService: ({
      url,
      port = PORT,
      zuul = 'zuul',
      version,
      server = 'crm',
      noPort,
      noZuul
    } = {}) =>
      serverCalc({
        newUrl: url || newUrl,
        port,
        zuul,
        version,
        server,
        noNewPort: typeof noPort === 'boolean' ? noPort : noNewPort,
        noNewZuul: typeof noZuul === 'boolean' ? noZuul : noNewZuul
      }),
    modelsService: ({
      url,
      port = PORT,
      zuul = 'zuul',
      version,
      server = 'models',
      noPort,
      noZuul
    } = {}) =>
      serverCalc({
        newUrl: url || newUrl,
        port,
        zuul,
        version,
        server,
        noNewPort: typeof noPort === 'boolean' ? noPort : noNewPort,
        noNewZuul: typeof noZuul === 'boolean' ? noZuul : noNewZuul
      }),
    baseService: ({
      url,
      port = PORT,
      zuul = 'zuul',
      version,
      server = 'base',
      noPort,
      noZuul
    } = {}) =>
      serverCalc({
        newUrl: url || newUrl,
        port,
        zuul,
        version,
        server,
        noNewPort: typeof noPort === 'boolean' ? noPort : noNewPort,
        noNewZuul: typeof noZuul === 'boolean' ? noZuul : noNewZuul
      }),
    portService: ({
      url,
      newUrl = auth,
      port = PORT,
      zuul,
      version,
      server,
      noPort,
      noZuul
    } = {}) =>
      serverCalc({
        newUrl: url || newUrl,
        port,
        zuul,
        version,
        server,
        noNewPort: typeof noPort === 'boolean' ? noPort : noNewPort,
        noNewZuul: typeof noZuul === 'boolean' ? noZuul : noNewZuul
      }),
    erpService: ({
      url,
      port = PORT,
      zuul = 'zuul',
      version,
      server = 'erp',
      noPort,
      noZuul
    } = {}) =>
      serverCalc({
        newUrl: url || newUrl,
        port,
        zuul,
        version,
        server,
        noNewPort: typeof noPort === 'boolean' ? noPort : noNewPort,
        noNewZuul: typeof noZuul === 'boolean' ? noZuul : noNewZuul
      }),
    clientService: ({
      url,
      port = PORT,
      zuul = 'zuul',
      version,
      server = 'client',
      noPort,
      noZuul
    } = {}) =>
      serverCalc({
        newUrl: url || newUrl,
        port,
        zuul,
        version,
        server,
        noNewPort: typeof noPort === 'boolean' ? noPort : noNewPort,
        noNewZuul: typeof noZuul === 'boolean' ? noZuul : noNewZuul
      }),
    scoreService: ({
      url,
      port = PORT,
      zuul = 'zuul',
      version,
      server = 'score',
      noPort,
      noZuul
    } = {}) =>
      serverCalc({
        newUrl: url || newUrl,
        port,
        zuul,
        version,
        server,
        noNewPort: typeof noPort === 'boolean' ? noPort : noNewPort,
        noNewZuul: typeof noZuul === 'boolean' ? noZuul : noNewZuul
      }),
    boutiqueService: ({
      url,
      port = PORT,
      zuul = 'zuul',
      version,
      server = 'boutique',
      noPort,
      noZuul
    } = {}) =>
      serverCalc({
        newUrl: url || newUrl,
        port,
        zuul,
        version,
        server,
        noNewPort: typeof noPort === 'boolean' ? noPort : noNewPort,
        noNewZuul: typeof noZuul === 'boolean' ? noZuul : noNewZuul
      }),
    statisticsService: ({
      url,
      port = PORT,
      zuul = 'zuul',
      version,
      server = 'statistics',
      noPort,
      noZuul
    } = {}) =>
      serverCalc({
        newUrl: url || newUrl,
        port,
        zuul,
        version,
        server,
        noNewPort: typeof noPort === 'boolean' ? noPort : noNewPort,
        noNewZuul: typeof noZuul === 'boolean' ? noZuul : noNewZuul
      }),
    cmsService: ({
      url,
      port = '7777',
      zuul = 'zuul',
      version,
      server = 'cms',
      noPort,
      noZuul
    } = {}) =>
      serverCalc({
        newUrl: url || newUrl,
        port,
        zuul,
        version,
        server,
        noNewPort: typeof noPort === 'boolean' ? noPort : noNewPort,
        noNewZuul: typeof noZuul === 'boolean' ? noZuul : noNewZuul
      })
  };
}

// 服务接口路径整合
function serverCalc({
  newUrl,
  port,
  zuul,
  version,
  server,
  noNewPort,
  noNewZuul
}) {
  let web_api = newUrl || testUrl;
  if (port && !noNewPort) web_api += ':' + port;
  if (zuul && !noNewZuul) web_api += '/' + zuul;
  if (version) web_api += '/' + version;
  if (server) web_api += '/' + server;
  return web_api;
}
