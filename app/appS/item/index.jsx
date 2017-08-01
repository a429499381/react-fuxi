import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link, hashHistory } from 'react-router'

import './style.less'
import {getListData} from "../../fetch/home/home";

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }
    render() {
        const item = this.props.data
        return (
            <div id={item.id}  key={this.props.key} >
                <img src={item.img} alt="" className="item_img"/>
                <h3>{item.title}</h3>
                <p className="item_subtxt">{item.subTitle}</p>
                <p className="itemprice">{item.price}</p>
            </div>
        )
    }






}

// -------------------redux react 绑定--------------------

export default Item