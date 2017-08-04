import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CITYNAME} from "../../config/localStoreKey"
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'


import './style.less'

import HomeHearder from '../Com/HomeHearder'
import AD from '../Ad'


class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            cityName: ''
        }
    }

    // 渲染页面
    render() {
        return (
            <div className="Home">
                <HomeHearder cityName ={this.props.userinfo.cityName} Goto={this.backCityName.bind(this)}/>
                <AD />
            </div>
        )
    }

    // 生命周期函数
    componentDidMount() {
        const cityName = this.props.userinfo.cityName
        this.setState({
            cityName: cityName
        })
    }

    backCityName(cityName) {
        const userinfo = this.props.userinfo
        userinfo.cityName = cityName
        this.setState({
            cityName: cityName
        })
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

