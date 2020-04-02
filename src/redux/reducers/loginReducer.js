import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actiontypes'

export const initState = {
    isFetching: false
}

export const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false
            }

        default:
            return state;
    }
}