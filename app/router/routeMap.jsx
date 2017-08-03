import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../Apps/index'
import Home from '../Apps/Home/index'
import City from '../Apps/City'
import Login from '../Apps/Login'
import User from '../Apps/User'
import Search from '../Apps/Search'
import Detail from '../Apps/Detail'
import NotFound from '../Apps/404'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/city' component={City}/>
                    <Route path='/Login(/:router)' component={Login}/>
                    <Route path='/User' component={User}/>
                    <Route path='/search/:category(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap
