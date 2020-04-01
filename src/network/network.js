import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/h3",
    // timeout: ,
  })
  instance.interceptors.response.use(res => {
    return res.data
  })
  return instance(config)
}