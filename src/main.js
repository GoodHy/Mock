// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill';
import App from './App'
import router from './router'
import Loading from './components/YiMixins/Loading';
import axios from 'axios';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './mock/index.js'
import locale from 'element-ui/lib/locale/lang/en'
import store from './store/index'

Vue.config.productionTip = false
Vue.prototype.$axios=axios;
Vue.use(ElementUI, { locale });
Vue.use(Vuex);
Vue.use(store);
//加载全局Loading控制
Vue.mixin(Loading);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
