/*
用户注册的路由组件
*/
import React, { Component } from 'react'
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Radio,
    Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {register} from '../../redux/actions'
import Logo from '../../components/logo/logo'

 class Register extends Component {
    state={
        username:'',//用户名
        password:'',//密码
        password2:'',//确认密码
        type:'dashen',//人员类型  dashen/laoban 
    }
    handleChange=(name,val)=>{//处理输入框/单选框变化，收集数据到state
        this.setState({
            [name]:val  //传的不是name属性，而是name对应的属性值
        })
    }
    toLogin=()=>{//去往登陆页面
        this.props.history.replace('/login')
    }
    register=()=>{//注册
        // console.log(JSON.stringify(this.state))
        this.props.register(this.state)
    }
    render() {
        const {type}=this.state
        const {redirectTo,msg}=this.props
        if(redirectTo){
            return <Redirect to={redirectTo} />
        }
        return (
            <div>
                <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘&nbsp;</NavBar>
                <Logo />
                <WingBlank>
                    {msg?<div className='error-msg'>{msg}</div>:null}
                    <List>
                        <InputItem placeholder='输入用户名' onChange={val=>this.handleChange('username',val)}>用户名:</InputItem>
                        <WhiteSpace />
                        <InputItem type='password' placeholder='输入密码' onChange={val=>this.handleChange('password',val)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace />
                        <InputItem type='password' placeholder='输入确认密码' onChange={val=>this.handleChange('password2',val)}>确认密码:</InputItem>
                        <WhiteSpace />
                        <List.Item>
                            <span>用户类型:</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='dashen'} onClick={val=>this.handleChange('type','dashen')}>大神</Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='laoban'} onClick={val=>this.handleChange('type','laoban')}>老板</Radio>
                        </List.Item>
                        <WhiteSpace />
                        <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;&nbsp;册</Button>
                        <WhiteSpace />
                        <Button onClick={this.toLogin}>已有账号</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state=>state.user,
    {register}
)(Register)