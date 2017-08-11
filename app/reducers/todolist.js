import * as actionTypes from '../constants/todolist'

const initialState = []

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.TODOLIST_UPDATE:
            return action.data
        case actionTypes.TODOLIST_ADD:
            state.unshift(action.data)
            return state
        case actionTypes.TODOLIST_RM:
            return state.filter(item => {
                if (item.id !== action.data.id) {
                    return item
                }
            })
        default:
            return state
    }
}