export default {
    User(state) {
        return state.userinfo
    },
    City(state) {
        let str='';
        for(let item of state.adressList){
            str += item +' '
        }
        state.adressList=str
        return state.adressList
    }
}