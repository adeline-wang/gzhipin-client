/*
用户登陆的路由组件
*/
import React, { Component } from 'react'
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Button
} from 'antd-mobile'

import Logo from '../../components/logo/logo'

export default class Login extends Component {
    state={
        username:'',//用户名
        password:'',//密码
    }
    handleChange=(name,val)=>{//处理输入框/单选框变化，收集数据到state
        this.setState({
            [name]:val  //传的不是name属性，而是name对应的属性值
        })
    }

    toRegister=()=>{//去往注册页面
        this.props.history.replace('/register')
    }
    login=()=>{//登陆
        console.log(JSON.stringify(this.state))
    }

    render() {
        return (
            <div>
                <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘&nbsp;</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem placeholder='输入用户名' onChange={val=>this.handleChange('username',val)}>用户名:</InputItem>
                        <WhiteSpace />
                        <InputItem type='password' placeholder='输入密码' onChange={val=>this.handleChange('password',val)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace />
                        <WhiteSpace />
                        <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;&nbsp;陆</Button>
                        <WhiteSpace />
                        <Button onClick={this.toRegister}>还没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}