import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CITYNAME} from "../../config/localStoreKey"
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import './style.less'

class City extends React.Component {
    constructor(props) {
        super(props)
    }

    // 渲染页面
    render() {
        return (
            <div className="Home">
                <div className="title">
                    <a href="#">返回</a>
                    <h2>{this.props.params.value}</h2>
                </div>
                <div className='City'>{this.props.userinfo.cityName}</div>
                <div className="list">
                    <a href="javascript:;"
                       onClick ={this.backCity.bind(this, '武汉')}>武汉</a>
                    <a href="javascript:;"
                       onClick ={this.backCity.bind(this, '天津')}>天津</a>
                    <a href="javascript:;"
                       onClick ={this.backCity.bind(this, '北京')}>北京</a>
                    <a href="javascript:;"
                       onClick ={this.backCity.bind(this, '上海')}>上海</a>
                    <a href="javascript:;"
                       onClick ={this.backCity.bind(this, '厦门')}>厦门</a>
                    <a href="javascript:;"
                       onClick ={this.backCity.bind(this, '长沙')}>长沙</a>
                    <a href="javascript:;"
                       onClick ={this.backCity.bind(this, '湖南')}>湖南</a>
                </div>
            </div>
        )
    }

    // 生命周期函数
    componentDidMount() {

    }

    // 城市更新
    backCity() {

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
)(City)
