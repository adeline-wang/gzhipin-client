/*
dashen 信息完善路由组件
*/
import React, { Component } from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { updateUser } from '../../redux/actions'

import HeaderSelector from '../../components/header-selector/header-selector'

class DashenInfo extends Component {
    state = {
        header: '',//头像名称
        info: '',//个人简介
        post: '',//求职岗位
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
        this.props.updateUser(this.state)
    }
    render() {
        const { user } = this.props
        // 如果用户信息已完善, 自动跳转到大神主界面
        if (user.header) {
            return <Redirect to='/dashen' />
        }
        return (
            <div>
                <NavBar>大神信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader} />
                <InputItem placeholder='请输入求职岗位' onChange={val => this.hangleChange('post', val)}>求职岗位:</InputItem>
                <TextareaItem title="个人介绍:" rows={3} onChange={val => this.hangleChange('info', val)} />
                <Button type='primary' onClick={this.save}>保存</Button>
            </div>
        )
    }
}

export default connect(
    state => ({ user: state.user }),
    { updateUser }
)(DashenInfo)