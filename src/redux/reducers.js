/*
包含多个用于生成新的state 的reducer 函数的模块
*/
import { combineReducers } from 'redux'

import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RESET_USER,
    RECEIVE_USER
} from './action-types'

import { getRedirectTo } from '../utils'


const initUser = {
    username: '',//用户名
    type: '',//类型
    msg: '',//错误信息提示
    redirectTo: '',//需要自动跳转的路由path
}

function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS://认证成功
            const { type, header } = action.data
            return { ...action.data, redirectTo: getRedirectTo(type, header) }
        case ERROR_MSG://错误信息提示
            return { ...state.data, msg: action.data }
        case RECEIVE_USER://接收用户
            return action.data
        case RESET_USER://重置用户
            return { ...initUser, msg: action.data }
        default:
            return state
    }
}


// 返回合并后的reducer 函数
export default combineReducers({
    user,
})


