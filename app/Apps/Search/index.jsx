import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CITYNAME} from "../../config/localStoreKey"
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'


import Input from '../Com/Input'

class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    // 渲染页面
    render() {
        return (
          <div>
              <div className="Search">
                  <a href="#">返回</a>
                  <Input/>
                  <a href="#"></a>
              </div>

          </div>

        )
    }

    // 生命周期函数
    componentDidMount() {
        const cityName = this.props.userinfo.cityName
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
)(Search)
