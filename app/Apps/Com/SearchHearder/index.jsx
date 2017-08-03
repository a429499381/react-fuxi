import React from 'react'
import {Link,  hashHistory } from 'react-router'

import './style.less'


class SearchHearder extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            value: ''
        }
    }

    // 渲染页面
    render() {
        return (
            <div className="Search">
                <a  href="javascript:;" onClick={this.backCity.bind(this)}>{this.props.cityName}</a>
                <div className="input">
                    <input type="text"
                           placeholder="请输入要搜索的关键字"
                           value ={this.state.value}
                           onChange={this.inputTxt.bind(this)}
                           onKeyUp={this.keyCode.bind(this)}
                    />
                </div>
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
    // 处理输入内容
    inputTxt(e) {
        this.setState({
            value:  e.target.value
        })
    }
    keyCode(e) {
        if (e.keyCode === 13 ) {
            hashHistory.push('/Search/' + encodeURIComponent(e.target.value))
        }
    }


}

export default SearchHearder

