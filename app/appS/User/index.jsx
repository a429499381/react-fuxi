import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'

import './sub/style.less'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            username: '',
            cityname: '',
        }
    }
    render() {
        return (
            <div>
                <h1>用户界面</h1>
                <p className="cityname">
                    {this.state.cityname}
                </p>
                <p className="username">
                    {this.state.username}
                </p>

            </div>
        )
    }
    componentDidMount() {
        this.setState ({
            username: localStore.getItem('username'),
            cityname: localStore.getItem('USER_CURRENT_CITY_NAME')
        })

        console.log("username" + this.state.username)


        if (!this.state.username) {
            hashHistory.push('/Login')
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
)(User)