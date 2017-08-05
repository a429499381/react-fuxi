import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CITYNAME} from "../../config/localStoreKey"
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { hashHistory } from 'react-router'
import './style.less'
import ShopingList from '../ShopingList'
import { getOrderListData } from '../../fetch/user/orderlist'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            data: '',
        }
    }

    // 渲染页面
    render() {
        const data = this.state.data
        return (
           <div className="ShopingList">
              {
                  data.map((item, index) => {
                      return (
                        <div className="item" key ={index} id = {item.id}>
                            <h3>{item.title}</h3>
                            <img src={item.img}></img>
                            <p>{item.commentState}</p>
                            <p>{item.count}</p>
                            <p className="price">单价:{item.price}</p>
                        </div>
                      )
                  })
              }
            </div>



        )
    }

    // 生命周期函数
    componentDidMount() {
      const username = this.props.userinfo.username
      console.log(username)
      if (username) {
          this.GetData()
      }
    }

    GetData() {
      const result = getOrderListData()
      result.then(res => {
        return res.json()
      }).then(json => {
        this.setState({
          data: json
        })
        console.log(json)
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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
