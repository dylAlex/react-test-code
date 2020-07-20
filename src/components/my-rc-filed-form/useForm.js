import React from 'react'
import { objectExpression } from '@babel/types';

// 建立一个store用来存form的数据
class FormStore{
    constructor(){
        this.store={} //存储数据，比如说username password
        this.feildEntities = []; 
        this.callbacks={}
    }
    setAllbacks=(callback)=>{
        this.callbacks={
            ...this.callbacks,
            ...callback
        }
    }
    // 注册
    registerFeild=(entity)=>{
        this.feildEntities.push(entity);
        return ()=>{
            this.feildEntities=this.feildEntities.filter(item=>item!==entity)
            delete this.store[this.store[entity.props.name]]
        }
    }
    // 取数据
    getFieldsValue=()=>{
        return this.store
    }
    getFieldValue=(name)=>{
        return this.store[name]
    }
    // 设置数据，并且更新到组件
    setFieldsValue = newStore => {
        this.store = {
            ...this.store,
            ...newStore
        }
        // 更新到组件，如果需要Feild组件更新，需要执行forceUpdate(),当前组件只收集了数据，要想执行forceUpdate需要收集feild放入feildEntities
        this.feildEntities.forEach(entity=>{
            const {name} = entity.props
            // 下面的解决输入一个，也会把所有field都render的问题，拿到新的store对应的key，找到需要渲染的name再渲染
            Object.keys(newStore).forEach(key=>{
                if(key==name){
                    entity.onStoreChange()
                }
            })
            // if(entity.props.name==newStore.name){
            //     entity.onStoreChange()
            // }
        })
    }
    validate=()=>{
        let err = [];
        this.feildEntities.forEach(entity => {
            const {name, rules} = entity.props;
            let value = this.getFieldValue(name);
            let rule = rules && rules[0];
            if (rule && rule.required && (value === undefined || value === "")) {
                //  出错
                err.push({
                    [name]: rules.message,
                    value
                });
            }
        });
        return err;
    }
    submit=()=>{
        let err = this.validate();
        // 在这里校验 成功的话 执行onFinish ，失败执行onFinishFailed
        const {onFinish, onFinishFailed} = this.callbacks
        if(err.length===0){
            onFinish(this.getFieldsValue())
        }else if(err.length>0){
            onFinishFailed(err)
        }        
    };
    getForm=()=>{
        return {
            setAllbacks: this.setAllbacks,
            registerFeild: this.registerFeild,
            submit: this.submit,
            getFieldValue: this.getFieldValue,
            getFieldsValue: this.getFieldsValue,
            setFieldsValue: this.setFieldsValue,
        }
    }
}

export default function useForm(form) {
    // let res;
    // if(form){
    //     res = form;
    // }else{
    //     const formStore = new FormStore();
    //     res = formStore.getForm();
    // }
    // return [res];

    // 采用res没有记忆性,采用hook方法
    const formRef = React.useRef();
    if(!formRef.current){
        if(form){
            formRef.current = form;
        }else{
            const formStore = new FormStore();
            formRef.current = formStore.getForm();
        }
    }
    return [formRef.current]  
    
}
