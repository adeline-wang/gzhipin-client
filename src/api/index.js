/*
包含n 个接口请求函数的模块
每个函数返回的都是promise 对象
*/
import ajax from './ajax'


//注册接口
export const reqRegister=(user)=>ajax('./register',user,'POST')

//登陆接口
export const reqLogin=({username,password})=>ajax('./login',{username,password},'POST')
