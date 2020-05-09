import Fly from 'flyio/dist/npm/wx'
import cfg from '../cfg.js'
import apiObj from './api.js'
import utils from '../utils/index.js'

const fly = new Fly()
fly.config.baseURL = cfg.baseApi

// 添加请求拦截器
fly.interceptors.request.use((request) => {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  request.headers = {
    'X-Tag': 'flyio'
  }

  let authParams = {
    // 公共参数
    timestamp: Date.now()
  }

  request.body && Object.keys(request.body).forEach((val) => {
    if (request.body[val] === '') {
      delete request.body[val]
    };
  })
  request.body = {
    ...authParams,
    ...request.body
  }
  return request
})

// 添加响应拦截器
fly.interceptors.response.use(
  (response) => {
    wx.hideLoading()
    return response.data // 请求成功之后将返回值返回
  },
  (err) => {
    // 请求出错，根据返回状态码判断出错原因
    console.log(err)
    wx.hideLoading()
    if (err) {
      return '请求失败'
    };
  }
)

// 把所有 api 放到一个对象中暴露出去
const apiResObj = Object.keys(apiObj).reduce((prev, apiName, index, arr) => {
  let [, method, url] = apiObj[apiName].trim().match(/(\w+)\s+(.*)/)
  prev[apiName] = (...arg) => {
    const [data, options] = arg
    console.log(`urlurlurlurlurlurlurl`, url)
    if (url.includes(`{`)) { // 如果 url 中包含 { 标志说明有路径参数, 那么解析出参数名称, 并从 data 中提取值放到路径上
      const urlArgNameList = utils.matchAll(url, /\{(.+?)\}/g).map(item => item[1]) // 解析出来的参数列表
      urlArgNameList.forEach(argName => {
        const re = new RegExp(`\\{${argName}\\}`, 'g')
        if (data[argName] === undefined) {
          console.warn(`给定的值没有 ${url} 所需的参数 ${argName}`)
        }
        url = url.replace(re, data[argName])
      })
    }
    return fly[method](url, data, options)
  }
  return prev
}, {})

export default apiResObj
