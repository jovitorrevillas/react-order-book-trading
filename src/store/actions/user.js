import * as actionTypes from '../actions/actionTypes';

export const userInit = () => {
    return {
        type: actionTypes.USER_INIT,
    }
}

export const changeName = (name) => {
    return {
        type: actionTypes.CHANGE_NAME,
        name: name
    }
}

export const updateBalance = (order) => {
    return {
        type: actionTypes.UPDATE_BALANCE,
        order: order
    }
}
