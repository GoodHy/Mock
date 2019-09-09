import axios from 'axios';
import { inject } from './injectIntercepter';
import Config from '../app';

const service = axios.create({
  baseURL: '', // api的base_url
  timeout: 30000 // 请求超时时间
});

// inject(service);

export default service;
