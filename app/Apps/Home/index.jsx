import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CITYNAME} from "../../config/localStoreKey"
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    // 渲染页面
    render() {
        return (
            <div className="Home">
                Home11
            </div>
        )
    }

    // 生命周期函数

}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
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
)(Home)

