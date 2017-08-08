import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CITYNAME} from "../../config/localStoreKey"
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { Link, hashHistory } from 'react-router'

import './style.less'

import HomeHearder from '../Com/HomeHearder/'
import AD from '../Ad'
import List from '../List'
import Swiper from '../Swiper'


class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            cityName: ''
        }
    }

    // 生命周期函数
    componentDidMount() {
       console.log('首页渲染完毕')

        // 点击事件注册
        const that = this
        const callback = this.callback
        window.addEventListener('scroll', callback, false)
    }
    componentWillUnmount() {
        console.log('首页卸载')

        // 移除点击事件
        window.removeEventListener('scroll',callback, false)
    }

    // 点击事件函数
    callback() {
        console.log('Scroll')

        // 跳用获取高度
        this.scroll(that)

    }

    //  滚动获取高度
    scroll(that) {
        const list = that.refs.list
        const listHeight = list.getBoundingClientRect().bottom
        console.log(listHeight)
    }


    //  跳转城市页面
    GoCity() {
        hashHistory.push('/City')
    }


    // 渲染页面
    render() {
        return (
            <div className="Home">
                    <a href="javascript:;" onClick={this.GoCity.bind(this)}>城市</a>

                 <div className="list" ref="list">
                     <p className="item">1</p><p className="item">2</p><p className="item">3</p><p className="item">
                     4</p><p className="item">5</p><p className="item">6</p><p className="item">7</p><p
                     className="item">8</p><p className="item">9</p><p className="item">10</p><p className="item">11</p>
                     <p className="item">12</p><p className="item">13</p><p className="item">14</p><p className="item">
                     15</p><p className="item">16</p><p className="item">17</p><p className="item">18</p><p
                     className="item">19</p><p className="item">20</p><p className="item">21</p><p className="item">
                     22</p><p className="item">23</p><p className="item">24</p><p className="item">25</p><p
                     className="item">26</p><p className="item">27</p><p className="item">28</p><p className="item">
                     29</p><p className="item">30</p><p className="item">31</p><p className="item">32</p><p
                     className="item">33</p><p className="item">34</p><p className="item">35</p><p className="item">
                     36</p><p className="item">37</p><p className="item">38</p><p className="item">39</p><p
                     className="item">40</p><p className="item">41</p><p className="item">42</p><p className="item">
                     43</p><p className="item">44</p><p className="item">45</p><p className="item">46</p><p
                     className="item">47</p><p className="item">48</p><p className="item">49</p><p className="item">
                     50</p>
                 </div>
            </div>
        )
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

