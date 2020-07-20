import React, { useContext, useLayoutEffect, useReducer } from 'react'

const Context = React.createContext();

// 组件复合（类似vue插槽）返回children，数据存储
export function Provider({store, children}) {
    return <Context.Provider value={store}>{children}</Context.Provider>
}
export const connect=(
    mapStateToProps,
    mapStateToDispatch
) => WrappendComponent => props => {
    const store = useContext(Context);
    const {getState, dispatch, subscribe} = store;
    const stateProps = mapStateToProps(getState());
    // 注意此处是{dispatch}
    let dispatchProps = {dispatch}
    if(typeof mapStateToDispatch=='function'){
        dispatchProps = mapStateToDispatch(dispatch)
    }else if(typeof mapStateToDispatch=="object"){
        dispatchProps = bindActionCreators(mapStateToDispatch, dispatch)
    }
    // 此处只是为了触发更新
    const [,forceUpdate] = useReducer(x=>x+1, 0);
    // 为了避免useEffect延迟，可能会耽误更新，此处用不带延时的，但是大多数时机是用useEffect
    useLayoutEffect(()=>{
        const unSubscribe = subscribe(()=>{
            forceUpdate();
        });
        return ()=>{
            if(unSubscribe){
                unSubscribe();
            }
        }
    },[store])
    
    return <WrappendComponent {...props} {...stateProps}{...dispatchProps}/>
}

function bindActionCreator(creator, dispatch){
    // 不懂此处？？？？？？？？？？？？？？？
    return (...args)=>dispatch(creator(...args));
}
export function bindActionCreators(creators, dispatch) {
    let obj = {}
    for(let key in creators){
        obj[key] = bindActionCreator(creators[key], dispatch)
    }
    return obj
}
export function useSelector(selector){
    const store = useStore();
    const {getState, subscribe} = store;
    const stateState = selector(getState());

    const [,forceUpdate] = useReducer(x=>x+1, 0);
    useLayoutEffect(()=>{
        const unSubscribe = subscribe(()=>{
            forceUpdate();
        });
        return ()=>{
            if(unSubscribe){
                unSubscribe();
            }
        }
    },[store])
    return stateState
}
export function useDispatch(){
    const store = useStore();
    return store.dispatch;
}
export function useStore(){
    const store = useContext(Context);
    return store
}
