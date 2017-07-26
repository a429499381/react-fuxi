import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'

import './sub/style.less'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            username: ''
        }
    }
    render() {
        return (
            <div>
                <a href="#" className="back">返回</a>
                <h1>登陆</h1>
                <div className="user_login">
                    <span className="user_name">用户名</span>
                    <input type="text" className="userName" onChange={this.changeUser.bind(this)}/>
                    <span>{this.state.username}</span>
                    <span className="user_pass">密码</span>
                    <input type="password" className="userPass"/>
                    <a href="javascript:;" className="login_btn" onClick={this.login.bind(this)}>登陆</a>
                </div>
            </div>
        )
    }

    changeUser(e) {
        this.setState({
            username: e.target.value
        })
        let userinfo = this.props.userinfo
        userinfo.username = this.state.username
        this.props.userInfoActions.update(userinfo)
    }

    login() {
        if (this.state.username) {
            hashHistory.push('/User')
            console.log(this.state.username)
        } else {
            hashHistory.push('/Login')
            console.log("go Login")
        }
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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)