import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CITYNAME} from "../../config/localStoreKey"
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { Link, hashHistory } from 'react-router'

import './style.less'

import HomeHearder from '../Com/HomeHearder/'
import AD from '../Ad'
import List from '../List'
import Swiper from '../Swiper'


class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            cityName: ''
        }
    }

    // 生命周期函数
    componentDidMount() {
       console.log('22')
    }
    componentWillUnmount() {
        console.log('Umunt')
    }
    GoCity() {
        hashHistory.push('/City')
    }


    // 渲染页面
    render() {
        return (
            <div className="Home">
                    <a href="javascript:;" onClick={this.GoCity.bind(this)}>城市</a>

                 <div className="list">
                     11
                 </div>
            </div>
        )
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
)(Home)

