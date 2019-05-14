import Vue from 'vue'
import qs from 'qs'

interface Result {
  data: any
}

/**
 * 封装post请求
 * @param url
 * @param params
 */
export function post(url: string, params?: object): object {
  let _this = Vue.prototype

  return _this.$http({
    method: 'post',
    url: url,
    data: params
  }).then((res: Result) => {
    return Promise.resolve(res.data)
  })
}
