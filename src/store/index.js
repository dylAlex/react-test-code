import {createStore, combineReducers} from 'redux'

const userInit = {
    isLogin: false,
    username: ''
}
export const loginReducer = (state = {userInit}, {type}) => {
    switch (type) {
        case 'LOGIN_SUCCESS':
            return {...state, isLogin:true, username:"hello"}
        default:
            return state
    }
}

const store = createStore(
    combineReducers(
        {user: loginReducer}
    ),
    // applyMiddleware(logger, thunk)
);

export default store