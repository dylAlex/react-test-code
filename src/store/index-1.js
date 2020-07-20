// import { createStore, applyMiddleware } from 'redux'
import {createStore, applyMiddleware, combineReducers} from '../kredux'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'

export const counterReducer = (state = 0 , {type, payload=1}) => {
    switch (type) {
        case 'ADD':
            return state + payload;
        case 'MINUS':
            return state - payload;
        default:
            return state
    }
}

const store = createStore(
    combineReducers(
        {home: counterReducer}
    ),
    // applyMiddleware(logger, thunk)
);

export default store

function logger({getState}){
    return next=>{
        console.log('next==========', next) //next指的是createStore里面的dispatch
        return action=>{
            console.log('prev state', getState());
            let returnValue = next(action);
            console.log('next state', getState());
            return returnValue
        }
    } 
}
function thunk({dispatch, getState}){
    return next=>action=>{
        if(typeof action=='function'){
            action(dispatch, getState)
        }
        return next(action)
    }
}