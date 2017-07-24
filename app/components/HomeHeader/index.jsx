import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'

import SearchInput from '../SearchInput'

import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="top">
                <Link to="/city">
                    <a href="#" className="city">
                      {this.props.cityName}
                    </a>

                </Link>
                <div className="search">
                    <input type="text" placeholder="请输入要搜索内容"/>
                    <i className="search_icon"> </i>
                </div>
                <Link to="/Login">
                  <a href="#" className="user">用户</a>
                </Link>
            </div>
        )
    }
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default HomeHeader