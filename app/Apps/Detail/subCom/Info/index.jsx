import React from 'react'

import './style.less'

class Info extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    // 渲染页面
    render() {
        const data = this.props.data
        return (
            <div>
                <div className="Hearder">
                    <a href="#">返回</a>
                    <h2>商户详情   text-align: justify 布局无效</h2>
                </div>
                <div className="top">
                    <img src="" alt=""/>
                    <p className="title">{data.title}</p>
                    <p dangerouslySetInnerHTML={{__html: data.desc}}></p>
                    <div className="com">
                        <span className="start">5</span>

                        <span className="pl">288条</span>
                        <span className="price">88/</span>
                    </div>
                    <p className="name">双井 重庆火锅</p>
                    <p className="pf">
                        <span>口味:9.0</span>
                        <span>环境：8.7</span>
                        <span>服务：8.9</span>
                    </p>
                    <p className="address">
                        <span className="txt">双井北街与南街交汇出</span>
                        <a className="back" href="javascript:;">></a>
                    </p>
                    <p className="phone">
                        <span className="numb">40121123456</span>
                        <a href="javascript:;">></a>
                    </p>
                </div>
            </div>
        )
    }

    // 生命周期函数
    componentDidMount() {

    }
}

export default Info
