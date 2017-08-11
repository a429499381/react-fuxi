import * as actionTypes from '../constants/todolist'
const num = 10
const com = {
    id: Math.random(),
    component: false,
}

export function update(data) {
    return {
        type: actionTypes.TODOLIST_UPDATE,
        data
    }
}

export function add(item) {
    return {
        type: actionTypes.TODOLIST_ADD,
        data: {
            id: com.id,
            component: com.component,
            text: item
        }
    }
}

export function rm(id) {
    return {
        type: actionTypes.TODOLIST_RM,
        data: id
    }
}