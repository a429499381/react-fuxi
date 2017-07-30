import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link, hashHistory } from 'react-router'


import './sub/style.less'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }
    render() {
        return (
            <div>
              AD
            </div>

        )
    }

}

// -------------------redux react 绑定--------------------

export default Ad