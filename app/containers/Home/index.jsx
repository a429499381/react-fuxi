import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from './subpage/Ad'
import List from './subpage/List'

import * as actionsTodoList from '../../actions/todolist'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          value: ''
        }
    }
    render() {
        return (
            <div>
              <div className="todolist">
                <input type="text" placeholder="输入要待办的事情"
                    onChange = { this.InputHandle.bind(this)}
                    onKeyUp = { this.KeyCode.bind(this)}
                       value = { this.state.value }
                />
                <div className="list">
                  this.props.todolist
                  ?
                    this.props.todolist.map((item, index) => {
                      return <p key={index} >{item}</p>
                    })
                  : ''
                </div>
              </div>

                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category/>
                <div style={{height: '15px'}}>{/* 分割线 */}</div>
                <Ad/>
                <List cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }

    InputHandle() {

    }

    KeyCode() {

    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        todolist: state.todolist
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actionsTodoList: bindActionCreators(actionsTodoList, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
