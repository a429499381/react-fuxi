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
        if (!this.props.userinfo.username) {
            hashHistory.push('/Login')
        } else {
            let username = localStore.getItem('username')
            let cityname = localStore.getItem('USER_CURRENT_CITY_NAME')
            this.setState = {
                username: username,
                cityname: cityname
            }
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