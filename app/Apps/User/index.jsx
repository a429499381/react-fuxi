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
            <div className="Home">
                User1
            </div>
        )
    }

    // 生命周期函数
    componentDidMount() {
        const userName = this.props.userinfo.username
        if (!userName) {
            hashHistory.push('/Login/' + encodeURIComponent('User'))
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
)(User)
