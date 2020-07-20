import _Form from './Form'
import Field from  './Field'
import useForm from './useForm'
import React from 'react';


// RcFieldForm用function实现时
// const Form = _Form;
// Form.Field = Field;
// Form.useForm = useForm;

// export { Field, useForm }
// export default Form

// RcFieldForm用class实现时
const Form = React.forwardRef(_Form);
Form.Field = Field;
Form.useForm = useForm;

export { Field, useForm }
export default Form


