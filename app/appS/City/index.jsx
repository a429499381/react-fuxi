import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './sub/style.less'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <div className="list">
                    <a href="#" onClick={this.ClickHandle.bind(this, '武汉')}>武汉</a>
                    <a href="#" onClick={this.ClickHandle.bind(this, '上海')}>上海</a>
                    <a href="#" onClick={this.ClickHandle.bind(this, '天津')}>天津</a>
                    <a href="#" onClick={this.ClickHandle.bind(this, '北京')}>北京</a>
                </div>
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
)(City)
