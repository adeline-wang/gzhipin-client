/*
选择头像的组件
*/

import React, {Component} from 'react'
import {List, Grid} from 'antd-mobile'
import propTypes from 'prop-types'

export default class HeaderSelector extends Component{
    static propTypes={
        setHeader:propTypes.func.isRequired
    }

    state={
        icon:null
    }
    constructor(props){
        super(props)
        this.headerList=[]
        for(let i=0;i<20;i++){
            const text=`头像${i+1}`
            this.headerList.push({
                text:`头像${i+1}`,
                icon:require(`../../assets/imgs/${text}.png`)
            })
        }
    }
    selectHeader=({icon,text})=>{//点击头像
        // 更新当前组件的状态
        this.setState({icon})
        // 更新父组件的状态
        this.props.setHeader(text)
    }
    render(){
        const {icon}=this.state
        const gridHeader=icon?<p>已选择头像:<img src={icon} alt='header'/></p>:'请选择头像'
        return(
            <List renderHeader={()=>gridHeader}>
                <Grid data={this.headerList} 
                columnNum={5} 
                onClick={this.selectHeader} />
            </List>
        )
    }
}