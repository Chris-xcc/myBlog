import {
  SET_TOKEN,
  REMOVE_TOKEN,
  GET_EMAIL,
  GET_PAGE, GET_USERNAME
} from "./mutations-types";

export default {
  //存储token方法
  //设置token等于外部传递进来的值
  [SET_TOKEN](state, payload) {
    state.token = payload.token
    // console.log(payload);
  },

  [REMOVE_TOKEN](state) {
    state.token = ''
    state.username = ''
    // console.log(payload.token);
  },
  [GET_EMAIL](state, payload) {
    state.email = payload.email
    console.log(payload.email);
  },
  [GET_PAGE](state, payload) {
    // console.log(payload)
    state.page = window.localStorage.getItem('page')
  },
  [GET_USERNAME](state,payload){
    state.username = window.localStorage.getItem('username')
  }
}