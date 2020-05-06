import {INFO,USER_INFO} from './mutations-type'
export default{
    Address(context,payload){
        context.commit(INFO,payload)
    },
    User(context,payload){
        context.commit(USER_INFO,payload)
    }
}