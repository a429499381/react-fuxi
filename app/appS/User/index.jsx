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
import OrderData from '../OrderData/index'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          OrderData: [],
          Comment: [],
          commentState: 0,
        }
    }
    render() {
        const data = this.state.OrderData
        return (
            <div>
                <h2>用户界面</h2>
                <p className="cityname">
                    {this.props.userinfo.cityName}
                </p>
                <p className="username">
                    {this.props.userinfo.username}
                </p>

                {
                    data.map((item, index) => {
                        return (
                            <OrderData data ={item} key ={index} subcom = {this.subcom.bind(this)} />
                        )
                    })
                }

            </div>
        )
    }

    subcom(id, txt, username) {
      console.log(id, txt, username)
    }



    componentDidMount() {
        const that = this
        let username = localStore.getItem('username')
        let cityname = localStore.getItem('CITYNAME')
        let userinfo = this.props.userinfo
        userinfo.username = username
        this.props.userInfoActions.update(userinfo)




        if (!this.props.userinfo.username) {
            hashHistory.push('/Login')
        }

        const result = getOrderListData(username)
        result.then(res => {
            return res.json()
        }).then(json => {
            const data = json
            that.setState({
              OrderData: data,
            })
           console.log(data)
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
)(User)