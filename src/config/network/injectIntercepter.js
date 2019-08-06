import { Message } from 'element-ui';
import store from '../../store/index';
// import router from '../../router/index';
import { getToken } from '../../utils/auth';
import ErrorMessager from '../error/ErrorMessager';
import config from '../app';

const TokenName = 'access_token';
export function inject(service, option) {
  // request拦截器
  service.interceptors.request.use(
    config => {
      //识别请求中的LoadingTag,改变Store中该Tag的loading状态为true
      config.headers['loadingTag'] &&
        store.commit('loading/startLoading', config.headers['loadingTag']);
      if (getToken() && (!option || !option.withoutToken)) {
        const url = config.url;
        let newurl = '';
        if (url.indexOf('?') !== -1) {
          newurl = `${url}&${TokenName}=${
            config.token ? config.token : getToken()
          }`;
        } else {
          newurl = `${url}?${TokenName}=${
            config.token ? config.token : getToken()
          }`;
        }
        config.url = newurl;
        config.data = config.data || {};
      }
      return config;
    },
    error => {
      // console.log('Request拦截器Error ==>', error);
      Promise.reject(error);
    }
  );
  // response拦截器
  service.interceptors.response.use(
    response => {
      //识别请求中的LoadingTag,改变Store中该Tag的loading状态为false
      response.config.headers['loadingTag'] &&
        store.commit(
          'loading/stopLoading',
          response.config.headers['loadingTag']
        );
      //console.log('Axios Response ==>', response);
      if (response.status === 200) {
        //return response.data;
        //当返回的相应中有code才做进一步判断
        if (
          !response.data.code ||
          response.data.code === 200 ||
          response.data.code === 11102007 ||
          response.data.code === 11102008 ||
          response.data.code === 11701027 ||
          response.data.code === 11701012 ||
          response.data.code === 11701007 ||
          response.data.code === 11102007 ||
          response.data.code === 11102006 ||
          response.data.code === 10900003 ||
          response.data.code === 11701017 ||
          response.data.code === 11701030 ||
          response.data.code === 11701034 ||
          response.data.code === 11701035
        ) {
          return response.data;
        } else {
          console.log('报错retro19211700==>', response);
          //暂时不抛出异常,改为修改返回的消息文字
          const errorMessage = ErrorMessager(response.data);
          /*return {
            ...response.data,
            message: errorMessage
          };*/
          //抛出异常 - 开发和测试提示问题
          config.isDev && $errorDisplayer(new Error(errorMessage));
          return Promise.reject(new Error(errorMessage));
        }
      } else {
        //response.data.message && Message.error(response.data.message);
        //错误的响应码交由ErrorHandler处理
        errorHandler(response);
      }
      return Promise.reject(new Error('请求响应码错误!'));
    },
    error => {
      console.log(JSON.stringify(error));
      error.config.headers['loadingTag'] &&
        store.commit('loading/stopLoading', error.config.headers['loadingTag']);
      //console.log('Response拦截器Error ==>', JSON.stringify(error)); // for debug
      //返回的异常统一交由错误处理器决定处理
      return errorHandler
        ? errorHandler(error.response)
        : Promise.reject(error);
    }
  );
}

const errorHandler = response => {
  console.log('错误的响应信息 ==>', response);
  if (!response || !response.status) {
    Message.error('服务器无响应,请检查您的网络状态!');
    return Promise.reject(new Error('服务器无响应,请检查您的网络状态!'));
    /*Message.error('登录Token失效,请重新登录!');
    store.dispatch('user/handleLogout').then(() => {
      location.reload(true);
    });*/
  }
  console.log('响应异常 ==>', response);
  switch (response.status) {
    case 401:
      $errorDisplayer(new Error('Token失效,请重新登录'));
      store.dispatch('user/handleLogout').then(() => {
        location.reload(true);
      });
      break;
    case 403:
      $errorDisplayer(new Error('您没有访问权限!'));
      break;
    case 404:
      $errorDisplayer(new Error('404:访问的资源不存在!'));
      break;
    case '401':
      $errorDisplayer(new Error('Token失效,请重新登录'));
      store.dispatch('user/handleLogout').then(() => {
        location.reload(true);
      });
      break;
    case '403':
      $errorDisplayer(new Error('您没有访问权限!'));
      break;
    case '404':
      $errorDisplayer(new Error('404:访问的资源不存在!'));
      break;
    default:
      break;
  }
};

export default inject;
