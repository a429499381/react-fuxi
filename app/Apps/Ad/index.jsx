import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CITYNAME} from "../../config/localStoreKey"
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'


import './style.less'
import  { getAdData } from '../../fetch/home/home'



class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data: []
        }
    }

    // 渲染页面
    render() {
        const data = this.state.data
        return (
            <div className="Ad">
              {
                  data.map((item, index) => {
                      return (
                        <div className="item" key={index}>
                            <a href="javascript:;">
                                <img src={item.img} alt={item.title}/>
                            </a>
                        </div>
                      )
                  })
              }
            </div>


        )
    }

    // 生命周期函数
    componentDidMount() {
       this.Admore()
    }

    Admore() {
        const result = getAdData()
        result.then( res => {
            return ( res.json() )
        }).then( json => {
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
)(Home)

