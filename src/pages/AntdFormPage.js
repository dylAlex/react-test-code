import React, { Component, useEffect } from 'react'
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;
const nameRules={requied: true, message:'请输入姓名'}
const passwordRules={requied: true, message:'请输入密码'}

export default function AntdFormPage(props) {
    const [form] = Form.useForm();
    const onFinish=val=>{
        console.log('onFinish',val);
    }
    const onFinishFailed=val=>{
        console.log('onFinishFailed',val);
    }
    // const onReset=()=>{
    //     form.resetFields();
    // }
    useEffect(() => {
       form.setFieldsValue({name:'default'});
    },[])
    return (
        <div>
            <h3>AntdFormPage</h3>
            <Form 
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <FormItem label="姓名" name="name" rules={[nameRules]}>
                    <Input placeholder="name input placeholder" />
                </FormItem>
                <FormItem label="密码" name="password" rules={[passwordRules]}>
                    <Input placeholder="password input placeholder" />
                </FormItem>
                <FormItem>
                    <Button type="primary" size="large" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
            
        </div>
    )
}


