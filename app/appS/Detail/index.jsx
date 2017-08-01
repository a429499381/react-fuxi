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
           info: '',
           comData: []
        }
    }
    render() {
        return (
            <div>
                <div className="D_h">
                    <a href="#">返回</a>
                    <h2>商家详情</h2>
                </div>
                <div className="D_info">
                    {
                        this.state.info.map((item, index) => {
                        return (
                        <div key={index}>
                            <img src={item.src}/>
                            <p>{item.desc}</p>
    `                   </div>
                        )
                        })
                    }
                </div>

            </div>
        )
    }
    componentDidMount() {
        let id = this.state.id
        getInfoData(id).then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                info: json
            })
        })
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
