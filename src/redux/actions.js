/*
包含n个action creator函数的模块
异步action
同步action
*/

import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER
} from './action-types'

import {
    reqRegister,
    reqLogin,
    reqUpdateUser,
    reqUser
} from '../api'

//同步错误消息
const errorMsg=(msg)=>({type:ERROR_MSG,data:msg})
//同步成功响应
const authSuccess=(user)=>({type:AUTH_SUCCESS,data:user})
//同步接收用户
const receiveUser=(user)=>({type:RECEIVE_USER,data:user})
//同步重置用户
const resetUser=(msg)=>({type:RESET_USER,data:msg})


//异步注册
export function register({username,password,password2,type}) {
    // 进行前台表单验证, 如果不合法返回一个同步action 对象, 显示提示信息
    if(!username||!password||!type){
        return errorMsg('用户名密码必须输入')
    }
    if(password!==password2){
        return errorMsg('密码和确认密码不同')
    }
    return async dispatch=>{
        // 异步ajax 请求, 得到响应
        const respone=await reqRegister({username,password,type})
        // 得到响应体数据
        const result =respone.data
        // 如果是正确的
        if(result.code===0){
            // 分发成功的action
            dispatch(authSuccess(result.data))
        }else{
            // 分发提示错误的action
            dispatch(errorMsg(result.msg))
        }
        
    }
}


// 异步登陆
export function login({username,password}) {
    // 进行前台表单验证, 如果不合法返回一个同步action 对象, 显示提示信息
    if(!username||!password){
        return errorMsg('用户名密码必须输入')
    }
    return async dispatch=>{
        // 异步ajax 请求, 得到响应
        const respone=await reqLogin({username,password})
        // 得到响应体数据
        const result =respone.data
        // 如果是正确的
        if(result.code===0){
            // 分发成功的action
            dispatch(authSuccess(result.data))
        }else{
            // 分发提示错误的action
            dispatch(errorMsg(result.msg))
        }
        
    }
}

//更新用户异步action
export function updateUser(user){
    return async dispatch=>{
        const response =await reqUpdateUser(user)
        const result =response.data
        if(result.code===0){//更新成功
            dispatch(receiveUser(result.data))
        }else{//失败
            dispatch(resetUser(result.msg))
        }
    }
}

//异步获取用户
export const getUser=()=>{
    return async dispatch=>{
        const response=await reqUser()
        const result=response.data
        if(result.code===0){
            dispatch(receiveUser(result.data))
        }else{
            dispatch(resetUser(result.msg))
        }
    }
}