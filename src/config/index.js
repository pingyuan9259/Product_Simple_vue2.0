import cookie from 'js-cookie';

// 全局常量
const loc = window.location;
const host = loc.host;
const port = loc.port;
const APP_ENV = host.split('.')[0].split('-')[1] ? host.split('.')[0].split('-')[1] : 'pro';

// 初始变量
let APP_ID = '';
let APP_HOST = '';
let DEVICE_ID_KEY = '';
let APP_IS_LOCAL = false;
let API_PREFIX = '//api.pop.miyabaobei.com';
let TOKEN = '';
let SUPPLIER_ID = '';
let APP_TOKEN_KEY = '_app_token';
let SUPPLIER_ID_KEY = '_supplier_id';

// 获得host
APP_HOST = host;

// 获得顶级域
let topHostMatch = loc.hostname.match(/\.([^.]+\.com)$/);
let TOP_LEVEL_HOST = topHostMatch && topHostMatch[1];

if (!TOP_LEVEL_HOST) {
  throw new Error('请检查域名~');
}

// 获取设备信息
APP_ID = '56c6c309243cb728205a3dff';
DEVICE_ID_KEY = '_device_id_' + APP_ID;

// 如果有端口则判断为本地开发
if (port) {
  APP_IS_LOCAL = true;
}

// 确定相关的环境变量
if (APP_ENV !== 'pro') {
  APP_TOKEN_KEY = `_app_token_${ APP_ENV }`;
  API_PREFIX = `//api-${ APP_ENV }.pop.miyabaobei.com`;
  SUPPLIER_ID_KEY = `_supplier_id_${ APP_ENV }`;
}

// 获取登陆验证TOKEN以及用户ID(登陆后有效)
TOKEN = cookie.get(APP_TOKEN_KEY);
SUPPLIER_ID = cookie.get(SUPPLIER_ID_KEY);

// 打印相关变量
if (APP_IS_LOCAL) {
  console.log({
    APP_ENV: APP_ENV,
    APP_TOKEN_KEY: APP_TOKEN_KEY,
    TOKEN: TOKEN,
    SUPPLIER_ID_KEY: SUPPLIER_ID_KEY,
    SUPPLIER_ID: SUPPLIER_ID,
    API_PREFIX: API_PREFIX,
  }, '<===============环境变量');
}

export {
  APP_HOST,
  APP_IS_LOCAL,
  APP_ID,
  TOP_LEVEL_HOST,
  APP_ENV,
  DEVICE_ID_KEY,
  TOKEN,
  SUPPLIER_ID,
  API_PREFIX,
  APP_TOKEN_KEY,
};
