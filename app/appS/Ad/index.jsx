import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link, hashHistory } from 'react-router'

import './sub/style.less'
import {getAdData} from "../../fetch/home/home";

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }

    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((item, index) => {
                        return <div key={index} className="ad_item">
                                <a href={item.link} target="_blank">
                                    <img src={item.img} alt=""/>
                                </a>
                            </div>
                        }
                    )
                }
            </div>

        )
    }
    componentDidMount() {
        // 获取广告数据
        const result = getAdData()
        result.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json
            if (data.length) {
                this.setState({
                    data: data
                })
            }
        }).catch(ex => {
            // 发生错误
            if (__DEV__) {
                console.error('首页广告模块获取数据报错, ', ex.message)
            }
        })
    }

}

// -------------------redux react 绑定--------------------

export default Ad