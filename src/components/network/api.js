import axios from './request'

export function addComments(imgid, comments) {
    return axios.post('/good/addComments', {
        imgid,
        comments,
    })
}

export function cartAdd(imgid, userid, num, price) {
    return axios.post('/cart/addShopCart', {
        imgid,
        userid,
        num,
        price,
    })
}

export function indexData() {
    return axios.get('/good/index')
}

export function moreData(tid) {
    return axios.get('/good/more?tid=' + tid)
}

export function detailData(id) {
    return axios.get('/good/detail?imgid=' + id)
}

export function commentData(id) {
    return axios.get('/good/comments?imgid=' + id)
}

export function cartData(userid) {
    return axios.get('/cart/myShopCart?userid=' + userid)
}

export function cartDel(userid, imgid) {
    return axios.get('/cart/deleteShopCart?userid=' + userid + '&imgid=' + imgid)
}

export function cartUpdata(imgid, userid, num) {
    return axios.get('/cart/updateCount?imgid=' + imgid + '&userid=' + userid + '&num=' + num)
}

export function searchData() {
    return axios.get('/good/searchGoods')
}

export function Register(account, password, email) {
    return axios.post('/user/register', {
        account,
        password,
        email,
    })
}

export function Login(account, password,code) {
    return axios.post('/user/login', {
        account,
        password,
        code,
    })
}

export function Code() {
    return axios.get('/user/verificationCode')
}

export function doPay(uid, price) {
    return axios.post('/doPay', {
        uid,
        price
    })
}