import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { getOrderListData, postComment } from '../../fetch/user/orderlist'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'

import './sub/style.less'

class OrderData extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          Comment: [],
          commentState: 0,
        }
    }
    render() {
        const data = this.props.data
        return (
                <div className="OrderData">
                  {
                      data.map((item, index) => {
                          return (
                            <div className="item" key={index} id={item.id}>
                                <p>{item.title}</p>
                                <img src={item.img}/>
                                <p>{item.price}</p>
                                <div>
                                  {
                                      this.state.commentState === 0
                                        ? <a href="javascript:;" onClick={this.commentStateHandle.bind(this)}>评价</a>
                                        :   this.state.commentState === 2
                                          ? <a href="javascript:;" onClick={this.commentStateHandle.bind(this)}>已评价</a>
                                          : ''
                                  }
                                </div>
                            </div>
                          )
                      })
                  }
                </div>
        )
    }

    commentStateHandle() {

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
)(OrderData)