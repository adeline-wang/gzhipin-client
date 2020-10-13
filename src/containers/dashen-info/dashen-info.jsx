/*
dashen 信息完善路由组件
*/
import React, {Component} from 'react'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import {connect} from 'react-redux'


import HeaderSelector from '../../components/header-selector/header-selector'

class DashenInfo extends Component{
    //设置更新header
    setHeader=(header)=>{
        this.setState({header})
    }
    render(){
        return (
            <div>
                <NavBar>大神信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader} />
                <InputItem placeholder='请输入招聘职位'>招聘职位:</InputItem>
                <InputItem placeholder='请输入公司名称'>公司名称:</InputItem>
                <InputItem placeholder='请输入职位薪资'>职位薪资:</InputItem>
                <TextareaItem title="职位要求:" rows={3} />
                <Button type='primary'>保存</Button>
            </div>
        )
    }
}

export default connect(
    state=>({}),
    {}
)(DashenInfo)