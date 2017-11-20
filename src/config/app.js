import cookie from 'js-cookie';

// 全局常量
const win = window;
const loc = win.location;
const host = loc.host;
const port = loc.port;
const APP_ENV = host.split('.')[0].split('-')[1] ? host.split('.')[0].split('-')[1] : 'pro';

// 初始变量
let APP_ID = '';
let APP_HOST = '';
let DEVICE_ID_KEY = '';
let APP_IS_LOCAL = false;
let PREFIX = '//api-saas.tinfinite.com';
let TOKEN = '';
let APP_TOKEN_KEY = '_app_token';

// for host
APP_HOST = host;

// top level hostname
let topHostMatch = loc.hostname.match(/\.([^.]+\.com)$/);
let TOP_LEVEL_HOST = topHostMatch && topHostMatch[1];

// for host
APP_HOST = TOP_LEVEL_HOST;

// for appId & appLogo
if (!TOP_LEVEL_HOST) {
  // throw new Error('url is wrong!');
} else {
  APP_ID = '56c6c309243cb728205a3dff';
  DEVICE_ID_KEY = '_device_id_' + APP_ID;
}

// for env
if (port) {
  APP_IS_LOCAL = true;
}

// 判断有没有 env 有的话就是客户端 使用约定的token
let env = cookie.get('_app_env_' + APP_ID) || cookie.get('_app_env');
if (env) {
  APP_TOKEN_KEY = '_app_token_' + APP_ID || '_app_token';
  let suffix = APP_ENV === 'pro' ? '' : '-' + APP_ENV;
  PREFIX = '//api-saas' + suffix + '.tinfinite.com';
} else {
  // 没有env就是在web端  使用老版配置
  let SUFFIX = APP_ENV === 'pro' ? '' : APP_ENV;
  if (SUFFIX) {
    APP_TOKEN_KEY = SUFFIX === 'pro' ? '_app_token' : '_app_token_' + SUFFIX;
    PREFIX = '//api-saas-' + SUFFIX + '.tinfinite.com';
  }
}
TOKEN = cookie.get(APP_TOKEN_KEY);

console.log(APP_TOKEN_KEY);

export {
  APP_HOST,
  APP_IS_LOCAL,
  APP_ID,
  TOP_LEVEL_HOST,
  APP_ENV,
  DEVICE_ID_KEY,
  TOKEN,
  PREFIX,
  APP_TOKEN_KEY,
};
