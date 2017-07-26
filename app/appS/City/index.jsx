import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'

import './sub/style.less'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <div className="click_cityName">
                    <a href="#" onClick={this.changeCity.bind(this, '武汉')}>武汉</a>
                    <a href="#" onClick={this.changeCity.bind(this, '上海')}>上海</a>
                    <a href="#" onClick={this.changeCity.bind(this, '天津')}>天津</a>
                    <a href="#" onClick={this.changeCity.bind(this, '北京')}>北京</a>
                </div>
            </div>
        )
    }
    changeCity(newCity) {
        if (newCity == null) {
            return
        }
        // 修改 redux
        const userinfo = this.props.userinfo
        userinfo.cityName = newCity
        this.props.userInfoActions.update(userinfo)

        // 修改 cookie
        localStore.setItem(CITYNAME, newCity)

        // 跳转页面
        hashHistory.push('/')
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
)(City)