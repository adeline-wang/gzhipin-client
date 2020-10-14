/*
应用主界面路由组件
*/
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'

import { getRedirectTo } from '../../utils'
import {getUser} from '../../redux/actions'
import { connect } from 'react-redux'

 class Main extends Component {
    componentDidMount() {
        // cookie 中有userid
        // redux 中的user 是空对象
        const userid = Cookies.get('userid')
        const { user } = this.props
        if (userid && !user._id) {
            this.props.getUser() // 获取user 并保存到redux 中
        }
    }

    render() {
        // 得到当前请求的path
        const pathname = this.props.location.pathname
        // 判断用户是否已登陆(过)(cookie 中userid 是否有值)
        const userid = Cookies.get('userid')
        if (!userid) { // 如果没值, 自动跳转到登陆界面
            return <Redirect to='/login' />
        }
        // cookie 中有userid
        // redux 中的user 是否有数据
        const { user } = this.props
        if (!user._id) {
            return null // 不做任何显示
        } else {
            // 请求根路径时, 自动跳转到对应的用户主界面
            if (pathname === '/') {
                const path = getRedirectTo(user.type, user.header)
                return <Redirect to={path} />
            }
            return (
                <div>
                    <Switch>
                        <Route path='/laobaninfo' component={LaobanInfo} />
                        <Route path='/dasheninfo' component={DashenInfo} />
                    </Switch>
                </div>
            )
        }
    }
}
export default connect(
    state=>({user:state.user}),
    {getUser}
)(Main)