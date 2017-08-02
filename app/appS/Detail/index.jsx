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
           comData: [],
            hasMore: ''
        }
    }
    render() {
        const info = this.state.info
        const itemData = this.state.comData
        return (
            <div >
                <div className="D_h" >
                    <a href="#">返回</a>
                    <h2>商家详情</h2>
                </div>
                <div className="D_info">
                    <h1>{info.title}</h1>
                    <a href="javascript:;">
                        <img src={info.img} alt=""/>
                    </a>
                    <p className="price">{info.price}inf</p>
                    <p className="start">{info.star}</p>
                    <p className="desc">{info.desc}</p>
                </div>

                <div className="d_comData" ref="scrolls">
                    {
                        itemData.length
                        ? itemData.map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    <span className="userName">{item.username}</span>
                                    <p className="txt">{item.comment}</p>
                                    <p className="start">{item.star}</p>
                                </div>
                            )
                        })
                        : <div >加载中。。。</div>
                    }
                </div>
                <div onClick={this.moreHandle.bind(this)}>more。。。</div>


            </div>
        )
    }
    moreHandle() {
        const page = 0


        let id = this.state.id
        getCommentData(page, id).then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                comData: this.state.comData.concat(json.data),
                hasMore: json.hasMore
            })
        })
    }
    componentDidMount() {
        const that = this
        let timeoutId
        let id = this.state.id
        let info = this.state.info
        const scrolls = this.refs.scrolls
        const top = scrolls.getBoundingClientRect().top
        // 获取容器到顶部高度失败
        const windowHeight = window.screen.height
        console.log(top, windowHeight)
        const page = 0
        getInfoData(id).then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                info: json
            })
        })

        getCommentData(page, id).then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                comData: this.state.comData.concat(json.data),
                hasMore: json.hasMore
            })
        })

        function scroll() {
          if (top && top < 700) {
            getCommentData(page, id).then(res => {
              return res.json()
            }).then(json => {
              that.setState({
                comData: that.state.comData.concat(json.data),
                hasMore: json.hasMore
              })
            })

          }
        }

      window.addEventListener('scroll', function () {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(scroll, 50)
      }.bind(this), false)


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
