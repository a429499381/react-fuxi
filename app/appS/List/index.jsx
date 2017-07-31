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
                    ? <div ref="wrapper">
                        <a href="javascript:;"   onClick={this.clickHandle01.bind(this)}>more</a>
                    </div>
                    : <div>no more</div>
                }
            </div>

        )
    }

    clickHandle01() {
        this.setState({
            hasMore: true
        })
        let cityName = this.props.cityName
        let page = this.state.page + 1

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

    loadData() {
      let cityName = this.props.cityName
      let page = this.state.page
      let result = getListData(cityName, page)
      result.then(res => {
        return res.json()
      }).then(json => {
        const hasMore = json.hasMore
        const data = json.data
        this.setState({ hasMore: hasMore})
        data.length ? this.setState({data: data}) : 'no'
      })

    }

    componentDidMount() {
      this.loadData()

      const wrapper = this.refs.wrapper
      let timeoutId
      function callback() {
        const top = wrapper.getBoundingClientRect().top
        const windowHeight = window.screen.height
        if (top && top < windowHeight) {
          // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
          loadMoreFn()
        }
      }
      window.addEventListener('scroll', function () {
        if (this.props.isLoadingMore) {
          return
        }
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(callback, 50)
      }.bind(this), false);
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