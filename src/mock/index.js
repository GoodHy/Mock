const Mock = require('mockjs');
import MockInfo from './mock.js';



Mock.mock('/user',/post|get/i,MockInfo.produceData);
Mock.mock('/city',/get/i,MockInfo.city_template);