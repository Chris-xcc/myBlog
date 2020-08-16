import axios from 'axios'
import store from "../../store";

export function get(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: '/',
        timeout: 5000,
        method:'get'
    })
    // 3.发送真正的网络请求
    return instance(config)
}
export function post(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: '/',
        timeout: 5000,
        method:'post'
    })

    // 2.1 axios的请求拦截器
    instance.interceptors.request.use(config => {
            if (store.state.token){
                config.headers['Authorization'] = store.state.token
            }
            console.log(config);
            return config
        }, err => {
            console.log(err)
        }
    )
    // 2.2axios的响应拦截
    instance.interceptors.response.use(res=>{
        // console.log(res)
        return res.data
    },err => {
        console.log(err)
    })

    // 3.发送真正的网络请求
    return instance(config)
}
