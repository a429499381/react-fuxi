import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'

import './sub/style.less'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <div className="top">
                    <Link to="/city">
                    <a href="#" className="cityName">{this.props.userinfo.cityName}</a>
                    </Link>
                    <div className="search">
                        <input type="text" placeholder="请输入要搜索的内容"/>
                    </div>
                    <Link to="/user">
                        <a href="#" className="user">用户</a>
                    </Link>
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
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
