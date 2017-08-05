import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CITYNAME} from "../../config/localStoreKey"
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { hashHistory } from 'react-router'
import './style.less'
import ShopingList from '../ShopingList'

class User extends React.Component {
    constructor(props) {
        super(props)
    }

    // 渲染页面
    render() {
        return (
            <div className="ShopingList">
                ShopingList
            </div>
        )
    }

    // 生命周期函数
    componentDidMount() {


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
