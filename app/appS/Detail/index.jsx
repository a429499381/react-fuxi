import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'

import './sub/style.less'
import {getCommentData, getInfoData} from "../../fetch/detail/detai"

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
           id: this.props.params.id,
           info: [],
           comData: []
        }
    }
    render() {
        return (
            <div>
                {this.state.id}
            </div>
        )
    }
    componentDidMount() {
        let id = this.state.id
        getInfoData(id)
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
)(Detail)
