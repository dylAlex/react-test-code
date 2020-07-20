import React, { Component } from 'react'
import store from '../store'

export default class componentName extends Component {
    constructor(props){
        super(props);
        this.state={
            value: 1
        }
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.forceUpdate();
        })
    }
    // 为什么需要取消订阅，因为不取消的话组件销毁订阅的事件还在这样会报错
    componentWillUnmount(){
        if(this.unsubscribe){
            this.unsubscribe();
        }
    }
    add = ()=>{
        store.dispatch({type:'ADD',payload: this.state.value});
    }
    addAsync = ()=>{
        store.dispatch((dispatch, getState)=>{
            setTimeout(()=>{
                dispatch({type:'ADD', payload: this.state.value});
            },1000)
        });
    }
    promiseMinus=()=>{
        store.dispatch(Promise.resolve({type: 'MINUS', payload: this.state.value}))
    }
    changeValue=(event)=>{
        this.setState({
            // 字符串变数字减零
            value: event.target.value-0
        });
    }
    render() {
        return (
            <div>
                reduxPage
                <div>{store.getState().home}</div>
                <input type="text" value={this.state.value} onChange={this.changeValue}></input>
                <button onClick={this.add}>add</button>
                <button onClick={this.addAsync}>addAsync</button>
                <button onClick={this.promiseMinus}>promiseMinus</button>
            </div>
        )
    }
}
