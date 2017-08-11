import * as actionTypes from '../constants/todolist'

const initialState = []

export default function userinfo (state = initialState, actionsTodoList) {
    switch (actionsTodoList.type) {
        case actionTypes.TODOLIST_UPDATE:
            return actionsTodoList.data
        case actionTypes.TODOLIST_ADD:
              state.unshift(
                {
                  id: setTimeout(() =>{}),
                  component: actionsTodoList.data.component,
                  text: actionsTodoList.data.text
              })
              return state
        case actionTypes.TODOLIST_RM:
               state = state.filter(item => {
                   return parseInt(item.id) !== parseInt(actionsTodoList.id)
               })
        default:
            return state
    }
}