import axios, { AxiosInstance } from 'axios'

class HttpRequireClass {
  base_url: string
  instance: AxiosInstance
  
  constructor(base_url: string) {
    this.base_url = base_url
    this.instance = axios.create({
      baseURL: base_url,
      timeout: 20000
    })
    this.initInterceptors()
  }
  initInterceptors() {
    this.instance.interceptors.request.use(() => { }, (err) =>  Promise.reject(err) )
    this.instance.interceptors.response.use(() => { }, (err) => Promise.reject(err))
  }
}

export default HttpRequireClass