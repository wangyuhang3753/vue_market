import axios from 'axios'
export function post(config){
 // 1.创建axios的实例
 const instance = axios.create({
    baseURL: 'http://10.84.198.118:3000/api',
    method:'POST',
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

return instance(config)
}