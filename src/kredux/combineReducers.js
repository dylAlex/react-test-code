export default function combineReducers(reducers){
    return function combination(state={}, action){
        let newState={}
        let hasChanged=false;
        for(let key in reducers){
            const reducer = reducers[key];
            newState[key] = reducer(state[key], action)
            hasChanged = newState[key]!==state[key]
        }
        // reducer里面的state改变或者reducer删除和增加
        hasChanged = hasChanged || Object.keys(reducers).length!==Object.keys(state).length;
        return hasChanged?newState:state
    }
}