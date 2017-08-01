import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link, hashHistory } from 'react-router'

import './sub/style.less'
import {getListData} from "../../fetch/home/home";
import Item from '../item/index'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            page: 0,
            category: this.props.category
        }

    }
    render() {
        const data = this.state.data
        return (
            <div ref="wrapper">
                <div>{this.state.category}</div>
                {
                    this.state.data.length
                    ? data.map((item, index) => {
                        return (
                                <Item data={item} key={index}/>
                        )})
                    : <div>数据加载中。。。</div>
                }
                {
                    this.state.hasMore
                    ? <div className="k15">
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
        const cityName = this.props.cityName
        const page = this.state.page

        const result = getListData(cityName, page)
        result.then(res => {
            return res.json()
        }).then( json => {
            this.setState({
                hasMore: json.hasMore,
                data: this.state.data.concat(json.data),
                page: page + 1
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
      const that = this
      const more = this.clickHandle01()
      const cityName = this.props.cityName
      const page = this.state.page
      this.loadData()
      const wrapper = this.refs.wrapper
      const wrapper1 = this.refs.wrapper1
      let timeoutId
      function callback() {
        const top = wrapper.getBoundingClientRect().bottom
        const windowHeight = window.screen.height
        console.log(top, windowHeight)
        if (top && top <= 850) {
          that.setState({
            hasMore: true
          })


          const result = getListData(cityName, page)
          result.then(res => {
            return res.json()
          }).then( json => {
            that.setState({
              hasMore: json.hasMore,
              data: that.state.data.concat(json.data),
              page: page + 1
            })
          })
        }
      }

      window.addEventListener('scroll', function () {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(callback, 50)
      }.bind(this), false)

    }





}

// -------------------redux react 绑定--------------------

export default List