/*
使用axios 封装的ajax 请求函数
函数返回的是promise 对象
*/
import axios from 'axios'

export default function ajax(url='',data={},type='GET') {
    if(type==='GET'){
        let dataStr=''//数据拼接字符串
        Object.keys(data).forEach(key=>{
            dataStr+=key+'='+data[key]+'&'
        })
        if(dataStr!==''){
            //下面两种方式即可
            // dataStr=dataStr.substring(0,dataStr.length-1)
            dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'))
            url=url+'?'+dataStr
        }
        // 发送get 请求
        return axios.get(url)
    }else{
        // 发送post 请求
        return axios.post(url,data)// data: 包含请求体数据的对象
    }
}