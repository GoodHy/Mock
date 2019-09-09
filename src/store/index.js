import Vue from 'vue';
import Vuex from 'vuex';
import { getModuleName } from '../utils/stringUtil';

Vue.use(Vuex);

const context = require.context('./modules', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');
const modules = Object.create({});

for (let i = 0; i < keys.length; i += 1) {
  modules[getModuleName(keys[i])] = context(keys[i]).default;
}
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules
});
/*
1,要搜索的文件夹目录
2,是否还应该搜索它的子目录
3,以及一个匹配文件的正则表达式
4,require.context(directory, useSubdirectories = false, regExp = /^\.\//)
5,require.context("./test", false, /\.test\.js$/);
6,（创建了）一个包含了 test 文件夹（不包含子目录）下面的、所有文件名以 `.test.js` 结尾的、能被 require 请求到的文件的上下文。
**/
export default store;
