import axios from 'axios';
import { PREFIX, APP_TOKEN_KEY, TOKEN } from './';
import log from '../utils/log';
// import router from '../router'
import cookie from 'js-cookie';

const WRITE_LOG = false; // 是否上传log
const PASS_LOG = true; // 是否忽略log必传

// 创建axios实例
const request = axios.create({
  baseURL: PREFIX, // 请求BaseUrl
  timeout: 5000, // 请求超时时间
});

// request header 处理
const headerConfig = (config) => {
  config.headers['x-app-id'] = '56c6c309243cb728205a3dff'; // 所有请求头添加 appid
  if (TOKEN) {
    config.headers['x-access-token'] = TOKEN; // 有token 所有请求头添加 token
  } else {
    // router.push({ path: '/login' }); // 无token 跳转登录页
  }
};

// log 采集
const uploadLog = (_event) => {
  log.up(_event);
};

// log 结果处理
const handleLog = (result) => {
  if (PASS_LOG && result && result.code && +result.code === 1) {
    return true;
  } else {
    return false;
  }
};

// 请求结果处理
const handleResult = (result) => {
  if (result && result.code && result.code === 1) {
    return Promise.resolve(result.result);
  } else {
    if (result.need_login && result.need_login === 1) {
      if (window.confirm('登录状态已过期, 是否重新登录?')) {
        cookie.remove(APP_TOKEN_KEY);
        window.location.reload();
      }
    }
    return Promise.reject(result.message);
  }
};

// request拦截器
request.interceptors.request.use(async config => {
  if (!config.url) {
    return Promise.reject('无效的请求地址！');
  }
  // 请求头处理
  headerConfig(config);
  // log 上传
  if (WRITE_LOG) {
    let result = await uploadLog(config._event);
    if (!handleLog(result) && !PASS_LOG) {
      return Promise.reject('请正确填写log信息！');
    }
  }
  return config;
}, error => {
  // 错误处理
  console.log(error); // for debug
  return Promise.reject(error);
});

// respone拦截器
request.interceptors.response.use(
  response => {
    handleResult(response.data);
    return Promise.resolve(response);
  },
  /**
  * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  */
  // const code = response.data.code;
  // // 50014:Token 过期了 50012:其他客户端登录了 50008:非法的token
  // if (code === 50008 || code === 50014 || code === 50012) {
  //   Message({
  //     message: res.message,
  //     type: 'error',
  //     duration: 5 * 1000
  //   });
  //   // 登出
  //   store.dispatch('FedLogOut').then(() => {
  //     router.push({ path: '/login' })
  //   });
  // } else {
  //   return response
  // }
  error => {
    console.log('err' + error); // for debug
    return Promise.reject(error);
  }
);

export default request;
