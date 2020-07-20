import React, { Component } from 'react'
import FeildContext from './FeildContext';

export default class Field extends Component {
    static contextType = FeildContext;
    componentDidMount(){
        const { registerFeild }=this.context
        this.cancelRegisterFeild=registerFeild(this);
    }
    componentWillUnmount(){
        if(this.cancelRegisterFeild){
            this.cancelRegisterFeild();
        }
    }
    onStoreChange=()=>{
        // 如果直接用forceUpdate容易找不到this
        this.forceUpdate();
    }
    getControlled=()=>{
        const {name} = this.props;
        const { getFieldValue, setFieldsValue } = this.context;
        return {
            value:getFieldValue(name), //取数据
            onChange: event=>{
                // 存数据
                const newValue = event.target.value;
                setFieldsValue({[name]: newValue})
            }
        }
    }
    render() {
        console.log('field render')
        // 利用组件复合展示children
        const {children} = this.props;
        // 把拿到的children处理一下再返回
        const returnChildNode = React.cloneElement(children,this.getControlled());
        return returnChildNode;
    }
}
