/*
包含n个工具函数
*/

//返回对应的路由路径
export function getRedirectTo(type,header){
    let path
    if(type==='laoban'){
        path='/laoban'
    }else{
        path='/dashen'
    }
    if(!header){//如果没有头像的话需要进入信息完善界面
        path+='info'
    }
    return path
} 