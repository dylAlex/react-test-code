export default function createStore(reducer, enhancer) {
    if(enhancer){
        // 原来dispatch只能传对象，加强dispatch需要传dispatch, 
        // dispatch来自createStore,最终要做的是更改store，需要传reducer更改规则
        return enhancer(createStore)(reducer)
    }
    // 注意此处currentSate不可赋初始值为null,只有没定义的时候走到自定义组件里面时才能用state初始值，
    // 才能实现第20行让自定义组件显示初始值的效果
    let currentSate;
    let listeners = [];
    function getState(){
        return currentSate
    }
    function dispatch(action){
        currentSate = reducer(currentSate, action)
        // 状态改变以后统一执行listeners，通知更新
        listeners.forEach(item=>item())
    }
    function subscribe(func){
        // 收集订阅者
        listeners.push(func)
        return ()=>{
            const index = listeners.indexOf(func);
            listeners.splice(index,1);
        }
    }
    // 设置state初始值，传一个不符合的type值，让其走到default里面
    dispatch({type: 'KKKK/REDUX'});
    return {
        getState,
        dispatch,
        subscribe
    }
}
