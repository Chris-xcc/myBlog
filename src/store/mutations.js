import {SET_TOKEN,
  REMOVE_TOKEN
} from "./mutations-types";

export default
{
    //存储token方法
    //设置token等于外部传递进来的值
    [SET_TOKEN](state,payload){
        state.token = payload.token
        // console.log(payload.token);
    },

    [REMOVE_TOKEN](state){
        state.token = ''
        // console.log(payload.token);
    },
  }