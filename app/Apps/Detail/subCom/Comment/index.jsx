import React from 'react'

import './style.less'

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    // 渲染页面
    render() {
        const data = this.props.data
        return (
            <div>
               <p className="user">{data.username}</p>
               <p className="user">{data.comment}</p>
               <p className="star">{data.star}</p>
            </div>
        )
    }

    // 生命周期函数
    componentDidMount() {

    }
}

export default Comment
