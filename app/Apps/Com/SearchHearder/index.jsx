import React from 'react'
import {Link,  hashHistory } from 'react-router'

import './style.less'
import Input from '../../Com/Input'


class SearchHearder extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    // 渲染页面
    render() {
        return (
            <div className="Search">
                <a  href="javascript:;" onClick={this.backCity.bind(this)}>{this.props.cityName}</a>
                <Input/>
                <a href="javascript:;" onClick={this.GoUser.bind(this)}>用户</a>
            </div>
        )
    }

    // 生命周期函数

    backCity() {
       hashHistory.push('/City')
    }
    GoUser() {
        hashHistory.push('/User/')
    }
}

export default SearchHearder

