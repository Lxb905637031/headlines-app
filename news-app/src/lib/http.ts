import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// 域名基本配置
axios.defaults.baseURL = 'http://localhost:7001'

// 请求拦截器
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
})

// 响应拦截
axios.interceptors.response.use((res: AxiosResponse) => {
  if (res.data.err === 1) {
    return Promise.reject(res.data.data)
  }
  return res.data
}, (err) => {
  return Promise.reject(err)
})

export default axios