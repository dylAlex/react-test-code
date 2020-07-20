import React, {useReducer, useCallback, useEffect, useLayoutEffect} from 'react'
import {counterReducer} from '../store'

const init = initArg => {
    return initArg + 1;
}
export default function HookPage(props) {
    const [state11, dispatch11] = useReducer(counterReducer, 0, init);

    const add= useCallback(()=>{
        dispatch11({type:"ADD"})
    }, []) 
    useEffect(() => {
        console.log('useEffect');
    })
    useLayoutEffect(() => {
        console.log('useLayoutEffect');
    })
    console.log('------------') 
    //打印：
    // ------------
    // useLayoutEffect
    // useEffect

    return (
        <div>
            <h1>HookPage---hahahahha</h1>
            <p>{state11}</p>
            <button onClick={add}>add</button>
        </div>
    )
}
