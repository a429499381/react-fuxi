import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'

import './sub/style.less'

class Input extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div>
                <input type="text"
                    placeholder="请输入要搜索的关键字"
                    value= {this.state.value}
                    onChange={this.ONchane.bind(this)}
                    onKeyUp={this.ONkeup.bind(this)}
                />
            </div>
        )
    }
    ONchane(e) {
        this.setState({
            value: e.target.value
        })
    }

    ONkeup(e) {
        if ( e.keyCode !== 13) {
            return
        }
        let code = encodeURIComponent(e.target.value)
        hashHistory.push(/search/ + code)
        console.log(code)

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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input)