import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link, hashHistory } from 'react-router'
import RectSwiper from 'react-swipe'


import './sub/style.less'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const opt = {
            auto: 2500,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }
        return (
            <div>
                <RectSwiper className="swiper_box" swipeOptions={opt}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </RectSwiper>
                <div className="index">
                    {this.state.index + 1 }
                </div>
            </div>

        )
    }

}

// -------------------redux react 绑定--------------------

export default Category