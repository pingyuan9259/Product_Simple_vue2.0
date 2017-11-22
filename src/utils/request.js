import request from '@/config/request';

function handleError(err, params) {
  return Promise.reject(err);
}

export default {
  async get(params) {
    let url = params.url;
    // 此处处理 params.data 拼接数据到 url 上
    if (params.data) {
      let str = '';
      for (let i in params.data) {
        str += `${ i }=${ params.data[i] }&`;
      }
      url += '?' + str.substring(0, str.length - 1);
    }
    try {
      let res = await request({
        method: 'get',
        url: url,
      });

      return Promise.resolve(res.data ? res.data : {});
    } catch (err) {
      return handleError(err, params);
    }
  },
  async post(params) {
    try {
      let res = await request({
        method: 'post',
        url: params.url,
        data: params.data,
      });

      return Promise.resolve(res.data ? res.data : {});
    } catch (err) {
      return handleError(err, params);
    }
  },
  async put(params) {
    try {
      let res = await request({
        method: 'put',
        url: params.url,
        data: params.data,
      });

      return Promise.resolve(res.data ? res.data : {});
    } catch (err) {
      return handleError(err, params);
    }
  },
  async delete(params) {
    try {
      let res = await request({
        method: 'delete',
        url: params.url,
        data: params.data,
      });

      return Promise.resolve(res.data ? res.data : {});
    } catch (err) {
      return handleError(err, params);
    }
  },
};
