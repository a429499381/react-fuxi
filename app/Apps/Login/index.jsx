import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CITYNAME} from "../../config/localStoreKey"
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { hashHistory} from 'react-router'
import localStore from "../../util/localStore";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    // 渲染页面
    render() {
        return (
            <div className="Login">
               <div className="LoginHeader">
                   <a href="#">返回</a>
                   <h2>登陆页</h2>
               </div>
               <div className="user">
                   <span className="userTxt">用户名:</span>
                   <input type="text" className="user" onChange ={this.username.bind(this)}/>{this.state.username}
                   <p className="feng"></p>
                   <span className="userTxt">&nbsp;密码&nbsp;:</span>
                   <input type="password" className="password" onChange ={this.userpassword.bind(this)}/>
                   <p className="feng"></p>
                   <button className="submit" onClick ={this.Submit.bind(this)}>登陆</button>
                   <button className="close" onClick ={this.Close.bind(this)}>取消</button>
               </div>
            </div>
        )
    }

    // 生命周期函数
    componentDidMount() {


    }

     // 返回 之前路由
      GotoBack() {
        const router = this.props.params.router
        hashHistory.push('/' + router)
      }

     // 获取用户名密码
      username(e) {
            const username = e.target.value

            this.setState({
               username: username
            })
      }
      userpassword(e) {
        const password = e.target.value

        this.setState({
          password: password
        })
      }

      // 登陆流程
      Submit() {
          const router = this.props.params.router
          const userinfo = this.props.userinfo
          userinfo.username = this.state.username
          userinfo.password = this.state.password
          this.props.userInfoActions.update(userinfo)

          localStore.setItem('username', this.props.userinfo.username)
          localStore.setItem('password', this.props.userinfo.password)

          hashHistory.push('/' + router)

      }
      Close() {
        const router = this.props.params.router
        if (router === 'User'){
            hashHistory.push('/')
        } else {
            this.GotoBack()
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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
