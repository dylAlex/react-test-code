import React from 'react';
import './App.css';
// import AntdFormPage from './pages/AntdFormPage';
// import RcFieldForm from './pages/RcFieldForm';
// import ContextPage from './pages/ContextPage';
// import ReduxPage from './pages/ReduxPage'
// import ReactReduxPage from './pages/ReactReduxPage'
import ReactReduxHookPage from './pages/ReactReduxHookPage'
// import HookPage from './pages/HookPage'
import ReactRouterPage from './pagesrouter/ReactRouterPage'



function App() {
  return <div>
    {/* <ContextPage/> */}
    {/* <AntdFormPage/> */}
    {/* <RcFieldForm/> */}

    {/* <ReduxPage></ReduxPage> */}
    {/* <ReactReduxPage></ReactReduxPage> */}
    {/* <ReactReduxHookPage></ReactReduxHookPage> */}

    {/* <HookPage></HookPage> */}

    <ReactRouterPage></ReactRouterPage>
  </div>
}

export default App;

// function f1(arg){
//   console.log('f1',arg);
//   return arg
// }
// function f2(arg){
//   console.log('f2',arg);
//   return arg
// }
// function f3(arg){
//   console.log('f3',arg);
//   return arg
// }
// function compose(...funcs){
//   if(funcs.length===0) {
//     return arg=>arg;
//   }
//   if(funcs.length===1){
//     return funcs[0];
//   }
//   return funcs.reduce((a,b)=>(...arg)=>a(b(...arg)));
// }
// let a = compose(f1,f2,f3);
// let res = a('omg');
// console.log(res,'res');
// f3 omg
// f2 omg
// f1 omg
// omg res
