import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CITYNAME} from "../../config/localStoreKey"
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

class User extends React.Component {
    constructor(props) {
        super(props)
    }

    // 渲染页面
    render() {
        return (
            <div className="Home">
                User
            </div>
        )
    }

    // 生命周期函数
    componentDidMount() {
        const userName = this.props.userinfo.username
        console.log(userName)
        if (!userName) {
            hashHistory.push('/Login/' + encodeURIComponent('user'))
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
