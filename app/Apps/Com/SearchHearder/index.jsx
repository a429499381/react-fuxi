import React from 'react'

import './style.less'


class SearchHearder extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    // 渲染页面
    render() {
        return (
            <div className="Search">
                <a href="javascript:;" onClick={this.backCity.bind(this)}>{this.props.cityName}</a>
            </div>
        )
    }

    // 生命周期函数

    backCity() {

    }



}

export default SearchHearder

