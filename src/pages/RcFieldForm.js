import React, {Component, useEffect, useState} from 'react'
// import Form, {Field} from 'rc-field-form'
import Form , {Field} from "../components/my-rc-filed-form"
import Input from "../components/Input"

const nameRules={required: true, message:'请输入姓名'}
const passwordRules={required: true, message:'请输入密码'}

//function版本
// export default function RcFieldForm() {
//     const [form] = Form.useForm();
//     const onFinish=val=>{
//         console.log('onFinish',val);
//     }
//     const onFinishFailed=val=>{
//         console.log('onFinishFailed',val);
//     }
//     // const onReset=()=>{
//     //     form.resetFields();
//     // }
//     useEffect(() => {
//         // 这里可以获取form,form来自于useForm,
//         // 由于 const [form] = Form.useForm();第一次的时候没传参数，所以需要先新建
//         console.log("form", form); 
//        form.setFieldsValue({name:'default'});
//     },[])

//     const [show, setShow] = useState(true);

//     return (
//         <div>
//             <button onClick={()=>{setShow(!show)}}>change</button>
//             <Form 
//                 form={form}
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 >
//                 {show && (<Field label="姓名" name="name" rules={[nameRules]}>
//                     <Input placeholder="name input placeholder" />
//                 </Field>)}
//                 <Field label="密码" name="password" rules={[passwordRules]}>
//                     <Input placeholder="password input placeholder" />
//                 </Field>
//                 <button>Submit</button>
//             </Form>
//         </div>
//     )
// }

// class版本
export default class RcFieldForm extends Component {
    formRef = React.createRef();
    componentDidMount(){
        this.formRef.current.setFieldsValue({name:'default'});
    }
    onFinish=val=>{
        console.log('onFinish',val);
    }
    onFinishFailed=val=>{
        console.log('onFinishFailed',val);
    }
    render(){
        return (
            <div>
                <h3>AntdFormPage</h3>
                <Form 
                    ref={this.formRef}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    >
                    <Field label="姓名" name="name" rules={[nameRules]}>
                        <Input placeholder="name input placeholder" />
                    </Field>
                    <Field label="密码" name="password" rules={[passwordRules]}>
                        <Input placeholder="password input placeholder" />
                    </Field>
                    <button>Submit</button>
                </Form>
            </div>
        )
    }
}
