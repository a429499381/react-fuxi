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
        const item = this.props.data
        const index = this.props.key
        return (
                <div className="OrderData">


                            <div className="item" key={index} id={item.id}>
                                <p>{item.title}</p>
                                <img src={item.img}/>
                                <p>{item.price}</p>
                                  {
                                      this.state.commentState === 0
                                        ? <a href="javascript:;" onClick={this.commentStateHandle.bind(this)}>评价</a>
                                        :
                                          this.state.commentState === 2
                                          ? <a href="javascript:;" >已评价1</a>
                                          : ''
                                  }

                            </div>
                                {
                                    this.state.commentState === 1
                                        ? <div className="textarea">
                                            <textarea ref="txtarea"></textarea>
                                            <button onClick={this.subcomHandle.bind(this)}>提交</button>
                                            <button onClick={this.closeHandle.bind(this)}>取消</button>
                                        </div>
                                        : ''
                                }

                </div>
        )
    }
    closeHandle() {
        this.setState({
            commentState: 0
        })
    }
    subcomHandle() {
        const id =  this.props.data.id
        const txt = this.refs.txtarea.value.trim()
        const username = this.props.userinfo.username
        const subcom = this.props.subcom()
        console.log(id, txt, username, )
    }

    commentStateHandle() {

       this.setState({
           commentState: 1
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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderData)