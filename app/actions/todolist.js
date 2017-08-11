import * as actionTypes from '../constants/todolist'

export function update(data) {
    return {
        type: actionTypes.TODOLIST_UPDATE,
        data
    }
}

export function add(item) {
    return {
        type: actionTypes.TODOLIST_ADD,
        data: item
    }
}

export function rm(item) {
    return {
        type: actionTypes.TODOLIST_RM,
        data: item
    }
}