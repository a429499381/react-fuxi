import React from 'react'
import { hashHistory } from 'react-router'


class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value:  '',
        }
    }

    // 渲染页面
    render() {
        return (
          <div className="input">
              <input type="text"
                     placeholder="请输入要搜索的关键字"
                     value ={this.state.value}
                     onChange={this.inputTxt.bind(this)}
                     onKeyUp={this.keyCode.bind(this)}
              />
          </div>
        )
    }

    // 生命周期函数
    componentDidMount() {

    }

      // 处理输入内容
      inputTxt(e) {
        this.setState({
          value:  e.target.value
        })
      }
      keyCode(e) {
        if (e.keyCode === 13 ) {
          hashHistory.push('/Search/' + encodeURIComponent(e.target.value))
        }
      }
}

export default Input
