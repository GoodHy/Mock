/**
 * User: retro.
 * Time: 2018/11/1
 */

import { images } from '../assets';
const GlobalPlugin = {};
GlobalPlugin.install = Vue => {
  Vue.prototype.$images = images;
};
export default GlobalPlugin;
