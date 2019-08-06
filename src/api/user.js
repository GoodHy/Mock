import request from '../config/network/request';
export function getUserList() {
    return request({
      url: `/user`,
      method: 'get',
      headers:{

      }
    });
  }
  