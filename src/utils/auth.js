import Cookies from 'js-cookie';
import Crypto from 'crypto-js';
const { AES } = Crypto;
import lodash from 'lodash';
const TokenKey = 'YiAuto-Token';
const encriptKey = '!!YiAutoERPWeb!!';

// -------------------------start----------------------------
// 是否可代理-用于判断当前账号是否有权限切换其他账号
const isAgent = 'YiAuto-isAgent';
const agentManage = 'YiAuto-manage';
const agentList = 'YiAuto-list';

export function getTokenByIsAgent() {
  return Cookies.get(isAgent);
}

export function setTokenByIsAgent(token) {
  return Cookies.set(isAgent, token);
}

export function removeTokenByIsAgent() {
  return Cookies.remove(isAgent);
}

export function getTokenByAgentManage() {
  return Cookies.get(agentManage);
}

export function setTokenByAgentManage(token) {
  return Cookies.set(agentManage, token);
}

export function removeTokenByAgentManage() {
  return Cookies.remove(agentManage);
}

export function getTokenByAgentList() {
  const decryptBytes = AES.decrypt(
    localStorage.getItem(agentList) || '',
    encriptKey
  );
  const userInfo = JSON.parse(decryptBytes.toString(Crypto.enc.Utf8) || '{}');
  if (lodash.isObject(userInfo)) {
    return userInfo;
  } else {
    return null;
  }
}

export function setTokenByAgentList(userList) {
  if (!lodash.isObject(userList)) {
    return;
  }
  const encryptMessage = AES.encrypt(JSON.stringify(userList), encriptKey);
  localStorage.setItem(agentList, encryptMessage);
}

export function removeTokenByAgentList() {
  localStorage.setItem(agentList, '');
}

// --------------------------end---------------------------

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function setUserInfo(userInfo) {
  if (!lodash.isObject(userInfo)) {
    return;
  }
  const encryptMessage = AES.encrypt(JSON.stringify(userInfo), encriptKey);
  localStorage.setItem('userInfo', encryptMessage);
}

export function getUserInfo() {
  const decryptBytes = AES.decrypt(
    localStorage.getItem('userInfo') || '',
    encriptKey
  );
  const userInfo = JSON.parse(decryptBytes.toString(Crypto.enc.Utf8) || '{}');
  console.log('从Storage中获取的UserInfo ==>', userInfo);
  if (lodash.isObject(userInfo)) {
    return userInfo;
  } else {
    return null;
  }
}

export function checkSale(data) {
  let isSale = false;
  try {
    let {
      user: { userInfo = {} }
    } = data.$store.state;
    let { roles = [] } = userInfo;
    roles.forEach(v => {
      if (v.label && typeof v.label === 'string') {
        if (v.label.split(',').includes('sales')) isSale = true;
      }
    });
  } catch (e) {
    console.log(e);
  }
  return isSale;
}
