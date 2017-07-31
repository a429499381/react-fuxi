import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link, hashHistory } from 'react-router'

import './sub/style.less'
import {getListData} from "../../fetch/home/home";

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            page: 0
        }

    }
    render() {
        const data = this.state.data
        return (
            <div>
                {
                    this.state.data.length
                    ? data.map((item, index) => {
                        return (
                                <div className={index} id={item.id} key={index}>
                                    <img src={item.img} alt="" className="item_img"/>
                                    <h3>{item.title}</h3>
                                    <p className="item_subtxt">{item.subTitle}</p>
                                    <p className="itemprice">{item.price}</p>
                                </div>
                        )})
                    : <div>数据加载中。。。</div>
                }
                {
                    this.state.hasMore
                    ? <a href="javascript:;"  onClick={this.clickHandle01.bind(this)}>more</a>
                    : <div>no more</div>
                }
            </div>

        )
    }

    clickHandle01() {
        this.setState({
            hasMore: true
        })
        const cityName = this.props.cityName
        const page = this.state.page + 1

        const result = getListData(cityName, page)
        result.then(res => {
            return res.json()
        }).then( json => {
            this.setState({
                hasMore: json.hasMore,
                data: this.state.data.concat(json.data)
            })
        })

    }

    componentDidMount() {
        const cityName = this.props.cityName
        const page = this.state.page
        const result = getListData(cityName, page)
        result.then(res => {
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore
            const data = json.data
            this.setState({ hasMore: hasMore})
            data.length ? this.setState({data: data}) : 'no'
        })
    }


















    // componentDidMount() {
    //     // 获取广告数据
    //     const result = getAdData()
    //     result.then(res => {
    //         return res.json()
    //     }).then(json => {
    //         // 处理获取的数据
    //         const data = json
    //         if (data.length) {
    //             this.setState({
    //                 data: data
    //             })
    //         }
    //     }).catch(ex => {
    //         // 发生错误
    //         if (__DEV__) {
    //             console.error('首页广告模块获取数据报错, ', ex.message)
    //         }
    //     })
    // }

}

// -------------------redux react 绑定--------------------

export default List