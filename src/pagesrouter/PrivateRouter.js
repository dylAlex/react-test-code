import React from 'react'
import {connect} from "react-redux"
import {Route, Redirect} from 'react-router-dom'

export default connect(
    ({user})=>({isLogin: user.isLogin})
)(function PrivateRouter({isLogin, component:Component, ...rest}) {
    return (
        <Route {...rest} render={props=>
            isLogin?(<Component {...props}/>
            ):(
            <Redirect to={{
                pathname:'login',
                // 如果未登录，把登陆以后要跳转的地址带上
                state:{redirect:props.location.pathname}
            }}
            />
            )
        }
    />
    )
})
