import React from 'react'
import useForm from './useForm'
// 存取数据的方法是写在useForm里面，为了能在Field中用存取数据的方法，用context实现
import FeildContext from './FeildContext';

// RcFieldForm用function实现时
// export default function Form({children, onFinish, onFinishFailed, form}) {
//     const [formInstance] = useForm(form);
//     formInstance.setAllbacks({
//         onFinish,
//         onFinishFailed
//     });
//     console.log("formInstance", formInstance); 
//     return (
//         <form onSubmit={(event)=>{
//             event.preventDefault();
//             event.stopPropagation();
//             formInstance.submit();
//         }}>
//             <FeildContext.Provider value={formInstance}>
//                 {children}
//             </FeildContext.Provider>
//         </form>
//     )
// }

// RcFieldForm用class实现时
export default function Form({children, onFinish, onFinishFailed, form}, ref) {
    const [formInstance] = useForm(form);
    React.useImperativeHandle(ref, ()=>formInstance);
    
    formInstance.setAllbacks({
        onFinish,
        onFinishFailed
    });
    console.log("formInstance", formInstance); 
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            event.stopPropagation();
            formInstance.submit();
        }}>
            <FeildContext.Provider value={formInstance}>
                {children}
            </FeildContext.Provider>
        </form>
    )
}