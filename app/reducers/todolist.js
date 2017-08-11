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
               state = state.filter(item => {
                   return item.id == action.data
               })
        default:
            return state
    }
}