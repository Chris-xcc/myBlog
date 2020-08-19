import {
    SET_TOKEN,
    REMOVE_TOKEN, Get_Page
} from "./mutations-types";

export default
{
    //存储token方法
    //设置token等于外部传递进来的值
    [SET_TOKEN](state,payload){
        state.token = payload.token
        // console.log(payload);
    },

    [REMOVE_TOKEN](state){
        state.token = ''
        // console.log(payload.token);
    },
    [Get_Page](state,payload){
        // console.log(payload)
        state.page=window.localStorage.getItem('page')
    }
  }