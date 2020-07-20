import React, { Component } from 'react'
import {connect} from "react-redux"
import {Redirect} from 'react-router-dom'

export default connect(
    ({user})=>({isLogin: user.isLogin}),
    {
        login: ()=>({
            type:"LOGIN_SUCCESS"
        })
    }
)(class LoginPage extends Component {
    render() {
        const {isLogin, login, location} = this.props;
        const {redirect="/"}=location.state || {};
        if(isLogin){
            return <Redirect to={redirect}></Redirect>
        }
        return(
            <div>
                <h3>LoginPage</h3>
                <button onClick={login}>login</button>
            </div>
        )
    }
})
