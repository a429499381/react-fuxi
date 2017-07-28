import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'

import './sub/style.less'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            vale: ''
        }
    }
    render() {
        return (
            <div>
                <div className="top">
                    <Link to="/City">
                        <a href="#" className="cityName">{this.props.userinfo.cityName}</a>
                    </Link>
                    <div className="search">
                        <input type="text" placeholder="请输入要搜索的内容"
                               onChange={this.onChange.bind(this)}
                               onKeyUp={this.onKeup.bind(this)}
                               value={this.state.value}
                        />
                    </div>
                    <Link to="/user">
                        <a href="#" className="user">用户</a>
                    </Link>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            value: e.target.value || ''
        })
    }
    onChange(e) {
        let value = e.target.value
        this.setState({
            value: value
        })
    }
    onKeup(e) {
        if (e.target.value == 13) {
            this.enterHandle(e.target.value)
        }

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
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
