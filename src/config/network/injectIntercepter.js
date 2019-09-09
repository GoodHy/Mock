import { Message } from "element-ui";
import store from "../../store/index";
import router from "../../router/index";
import { getToken } from "../../utils/auth";
import ErrorMessager from "../error/ErrorMessager";
import config from "../app";

export function inject(service, option) {
  // request拦截器
  service.interceptors.request.use(
    config => {
      //识别请求中的LoadingTag,改变Store中该Tag的loading状态为true
      config.headers["loadingTag"] &&
        store.commit("loading/startLoading", config.headers["loadingTag"]);
      if (getToken() && (!option || !option.withoutToken)) {
        const url = config.url;
        let newurl = "";
        if (url.indexOf("?") !== -1) {
          newurl = `${url}&access_token=${
            config.token ? config.token : getToken()
          }`;
        } else {
          newurl = `${url}?access_token=${
            config.token ? config.token : getToken()
          }`;
        }
        config.url = newurl;
        config.data = config.data || {};
      }
      return config;
    },
    error => {
      Promise.reject(error);
    }
  );
  // response拦截器
  service.interceptors.response.use(
    response => {
      //识别请求中的LoadingTag,改变Store中该Tag的loading状态为false
      response.config.headers["loadingTag"] &&
        store.commit(
          "loading/stopLoading",
          response.config.headers["loadingTag"]
        );
      //console.log('Axios Response ==>', response);
      if (response.status === 200) {
      } else {
        //错误的响应码交由ErrorHandler处理
        errorHandler(response);
      }
      return Promise.reject(new Error("请求响应码错误!"));
    },
    error => {
      error.config.headers["loadingTag"] &&
        store.commit("loading/stopLoading", error.config.headers["loadingTag"]);
      //返回的异常统一交由错误处理器决定处理
      return errorHandler
        ? errorHandler(error.response)
        : Promise.reject(error);
    }
  );
}

const errorHandler = response => {
  console.log("错误的响应信息 ==>", response);
  if (!response || !response.status) {
  }
};

export default inject;
