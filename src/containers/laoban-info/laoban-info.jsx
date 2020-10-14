/*
laoban 信息完善路由组件
*/
import React, { Component } from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


import { updateUser } from '../../redux/actions'

import HeaderSelector from '../../components/header-selector/header-selector'

class LaobanInfo extends Component {
    state = {
        header: '',//头像名称
        info: '',//职位简介
        post: '',//职位名称
        company: '',//公司名称
        salary: '',//工资
    }
    //设置更新header
    setHeader = (header) => {
        this.setState({ header })
    }

    hangleChange = (name, val) => {
        this.setState({
            [name]: val
        })
    }
    //点击保存
    save = () => {
        console.log(this.state)
        this.props.updateUser(this.state)
    }
    render() {
        const { user } = this.props
        // 如果用户信息已完善, 自动跳转到老板主界面
        if (user.header) {
            return <Redirect to='/laoban' />
        }
        return (
            <div>
                <NavBar>老板信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader} />
                <InputItem placeholder='请输入招聘职位' onChange={val => this.hangleChange('post', val)}>招聘职位:</InputItem>
                <InputItem placeholder='请输入公司名称' onChange={val => this.hangleChange('company', val)}>公司名称:</InputItem>
                <InputItem placeholder='请输入职位薪资' onChange={val => this.hangleChange('salary', val)}>职位薪资:</InputItem>
                <TextareaItem title="职位要求:" rows={3} onChange={val => this.hangleChange('info', val)} />
                <Button type='primary' onClick={this.save}>保存</Button>
            </div>
        )
    }
}

export default connect(
    state => ({ user: state.user }),
    { updateUser }
)(LaobanInfo)