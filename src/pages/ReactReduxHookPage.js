import React, { useCallback } from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import {useSelector, useDispatch} from '../kReactRedux'

// store里面对一个的hook方法，useSelector,useDispatch,第一个是获取store,第二个是获取dispatch
export default function ReactReduxHookPage(props) {
    // 获取store state
    const home = useSelector(({home}) => home);
    // 注意hook只能写在顶层
    const dispatch = useDispatch();
    const add = useCallback(()=>{
        dispatch({type: "ADD"})
    },[]);
    return (
        <div>
            <h1>ReactReduxHookPage</h1>
            <p>{home}</p>
            <button onClick={add}>add</button>
        </div>
    )
}
