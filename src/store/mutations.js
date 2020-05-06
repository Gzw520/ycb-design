import { INFO, USER_INFO } from './mutations-type'
export default {
    [INFO](state, payload) {
        state.adressList = payload
        // console.log(state.adressList);
    },
    [USER_INFO](state, payload) {
        state.userinfo.push(payload)
        // console.log(state.userinfo);
    }
}










