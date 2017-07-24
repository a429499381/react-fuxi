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
                    <a href="#" className="city">城市</a>
                    <i className="top_city"></i>
                </Link>
                <div className="search">
                    <input type="text" placeholder="请输入要搜索内容"/>
                    <i className="search_icon"> </i>
                </div>
                <a href="#" className="user">用户</a>
            </div>
        )
    }
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default HomeHeader