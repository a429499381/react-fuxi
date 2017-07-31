import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'

import './sub/style.less'

import Search from '../Search/index'
import Category from '../Category/index'
import Ad from '../Ad/index'
import List from '../List/index'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            vale: ''
        }
    }
    render() {
        return (
            <div>
                <div className="top">
                    <Link to="/City">
                        <a href="#" className="cityName">{this.props.userinfo.cityName}</a>
                    </Link>
                    <div className="search">
                        <Search/>
                    </div>
                    <Link to="/user">
                        <a href="#" className="user">用户</a>
                    </Link>
                </div>
                <Category/>
                <Ad/>
                <List cityName={this.props.userinfo.cityName}/>
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
