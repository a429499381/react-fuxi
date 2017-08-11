import * as actionTypes from '../constants/todolist'

const initialState = []

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.TODOLIST_UPDATE:
            return action.data
        case actionTypes.TODOLIST_ADD:
              state.unshift(
                {
                  id: Math.random() +1,
                  component: action.data.component,
                  text: action.data.text
              })
              return state
        case actionTypes.TODOLIST_RM:
            const MoreState = state.filter(item => {
                if (item.id !== action.data.id) {
                    return item
                }
            })
            return MoreState
        default:
            return state
    }
}