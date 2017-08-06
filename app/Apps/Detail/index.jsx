import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CITYNAME} from "../../config/localStoreKey"
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { getInfoData, getCommentData} from "../../fetch/detail/detai"

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            InfoData: [],
            ComDaa: [],
            page: 0,
            ComMore: false,
        }
    }

    // 渲染页面
    render() {
        return (
            <div className="Detail">
                {
                    this.props.params.id
                }
            </div>
        )
    }

    // 生命周期函数
    componentDidMount() {
        const id = this.props.params.id
        let page = this.state.page

        // 获取 info
        this.getInfo(id)

        // 获取评价数据
        this.getCom(page, id)
    }

    // 处理 info 数据
    getInfo(id) {
        const InfoData = getInfoData(id)
        InfoData.then( res => {
            return ( res.json())
        }).then( json => {
            this.setState({
                InfoData: json
            })
        })
    }

    // 处理 评价 数据
    getCom(page, id) {
        const ComData = getCommentData(page, id)
        ComData.then( res => {
            return ( res.json())
        }).then( json => {
            this.setState({
                InfoData: json.data,
                hasMore: json.hasMore,
            })

        })
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
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
)(Detail)
