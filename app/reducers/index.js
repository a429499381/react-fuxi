import { combineReducers } from 'redux'
import userinfo from './userinfo'
import store from './store'
import todolist from './todolist'

export default combineReducers({
    userinfo,
    store,
    todolist
})