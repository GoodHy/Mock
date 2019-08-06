/**
 * User: retro.
 * Time: 2018/10/27
 */

import Numeral from 'numeral';

export default {
  name: 'Filter',
  filters: {
    money(vl) {
      return '¥' + Numeral(vl).format('0,0.00');
    }
  }
};
