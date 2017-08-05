import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CITYNAME} from "../../config/localStoreKey"
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import { Link, hashHistory } from 'react-router'

// 导入 fetch 组件
import { getSearchData } from '../../fetch/search/search'

import './style.less'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            SearchData: [],
            page: 0,
            cityName: '',
            hasMore: false
        }
    }

    // 渲染页面
    render() {
        const data = this.state.SearchData
        return (
          <div>
             <div>{this.props.category}</div>
              <div className="lists">
                {
                    data.map((item, index) => {
                        return (
                         <Link to={'/detail/' + item.id} key ={index}>
                            <div className="list_item" onClick ={this.GoDetail.bind(this)} key ={index} id ={item.id}>
                                <a href="javascript:;" className="item_img">
                                    <img src={item.img} alt=""/>
                                </a>
                                <div className="container">
                                    <h3>{item.title}</h3>
                                    <p className="mumber">{item.mumber}</p>
                                    <p className="price">{item.price}</p>
                                    <p className="subTitle">{item.subTitle}</p>
                                    <p className="distance">{item.distance}</p>
                                </div>
                            </div>
                          </Link>
                        )
                    })
                }
                <div className="more" ref="more">
                  {
                    this.state.hasMore
                    ? <div onClick ={this.more.bind(this)}>加载更多...</div>
                    : <div onClick ={this.more.bind(this)}>没有啦!</div>
                  }
                </div>
              </div>
          </div>

        )
    }

    // 生命周期函数
    componentDidMount() {
      const that = this
      let timeoutId = ''

      // 滚动加载更多
      function scroll() {
        const more = that.refs.more
        const moreHeight = more.getBoundingClientRect().bottom
        const windowHeight = window.screen.height
        console.log(moreHeight, windowHeight)
        if (moreHeight <= windowHeight) {
          that.more()
        }
      }

      // 添加滚动 监听事件
      window.addEventListener('scroll', function() {
        if (timeoutId) { clearTimeout(timeoutId)}
        timeoutId = setTimeout(scroll, 50)
      } ,false)


        this.setState({
          cityName: this.props.userinfo.cityName
        })
      this.GetListData()
    }

    // 处理重新搜索
    // componentDidUpdate(prevProps, prevState) {
    //     const keyword = this.props.keyword
    //     const category = this.props.category
    //
    //     // 搜索条件完全相等时，忽略。重要！！！
    //     if (keyword === prevProps.keyword && category === prevProps.category) {
    //         return
    //     }
    //
    //     // 重置 state
    //     this.setState({
    //         SearchData: [],
    //     })
    //
    //     // 重新加载数据
    //     this.GetListData()
    // }

    componentDidUpdate(prevProps, prevState) {
        const Category = this.props.category
        const keyword = this.props.keyword

        if (Category === prevProps.category && keyword === prevProps.keyword) {
            return
        }

        this.setState({
            SearchData: [],
        })

        this.GetListData()
        console.log('Update')
    }

    GetListData(num) {
        const page = this.state.page
        const cityName = this.state.cityName
        const category = this.props.category
        let keyword = 'all'
      const result = getSearchData( page, category, cityName,  keyword,)

        result.then( res => {
            return ( res.json())
        }).then( json => {
            if (num === 2) {
              this.setState({
                SearchData: this.state.SearchData.concat(json.data),
                hasMore: json.hasMore
              })
            } else {
              this.setState({
                SearchData: json.data,
                hasMore: json.hasMore
              })
            }

        })
    }

    // 跳转详情页
    GoDetail() {
        const id = this.props.id | '000'
        hashHistory.push('/detail/' + encodeURIComponent(id))
    }

    // 下啦加载更多
    more() {
      const num = 2
      this.GetListData(num)
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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
