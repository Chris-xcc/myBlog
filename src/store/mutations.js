import {SET_TOKEN} from "./mutations-types";

export default
{
    //存储token方法
    //设置token等于外部传递进来的值
    setToken(state) {
        state.token = window.localStorage.getItem('token')
    },
    [SET_TOKEN](state,payload){
        state.token = payload.token
        // console.log(payload.token);
    }
}