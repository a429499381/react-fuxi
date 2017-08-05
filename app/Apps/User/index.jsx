import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CITYNAME} from "../../config/localStoreKey"
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { hashHistory } from 'react-router'

class User extends React.Component {
    constructor(props) {
        super(props)
    }

    // 渲染页面
    render() {
        return (
            <div className="User">
                <div>{this.props.userinfo.username}</div>
                <div>{this.props.userinfo.cityName}</div>

                <a href="javascript:;" onClick={this.closeUser.bind(this)}>退出</a>
            </div>
        )
    }

    // 生命周期函数
    componentDidMount() {
        const username = this.props.userinfo.username
        if (!username) {
            hashHistory.push('/Login/' + encodeURIComponent('User'))
        }

    }

    // 退出用户
    closeUser() {
        const userinfo = this.props.userinfo
        userinfo.username = ''
        userinfo.password = ''
        localStorage.setItem('username', '')
        localStorage.setItem('password', '')


        this.props.userInfoActions.update(userinfo)
        hashHistory.push('/Login/' + 'User')
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
