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
                <div className="left">
                    <i className="icon_left"></i>
                    城市
                </div>
                <div className="search">
                    <i className="search_icon"></i>
                    <input type="text" placeholder="请输入要搜索的内容"/>
                </div>
                <div className="rignt">
                    <i className="icon_right"></i>
                    用户
                </div>
            </div>
        )
    }
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default HomeHeader