import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import LoginPage from "./LoginPage"
import UserPage from "./UserPage"
import HomePage from "./HomePage"
import _404Page from "./_404Page"
import PrivateRouter from "./PrivateRouter"


export default class ReactRouterPage extends Component {
    render() {
        return (
            <div>
                <h3>ReactRouterPage</h3>
                <Router>
                    <Link to="/">首页</Link>
                    <Link to="/user">用户中心</Link>
                    <Link to="/login">登录</Link>
                    <Link to="/product/123">product</Link>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        {/* <Route path="/user" component={UserPage}/> */}
                        <PrivateRouter path="/user" component={UserPage}></PrivateRouter>
                        <Route path="/login" component={LoginPage}/>
                        {/* <Route path="/product/:id" component={productPage}/> */}
                        <Route path="/product/:id" component={qiantaoPage}/>
                        <Route component={_404Page}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
// 动态路由
function productPage({match}){
    console.log(match, 'match')
    const {id} = match.params
    return <div>product---{id}</div>
}
// 嵌套路由
function qiantaoPage({match}){
    console.log(match, 'match')
    const {id} = match.params
    return (
        <div>
            <h1>product---{id}</h1>
            <Link to={match.url+"/detail"}>detail</Link>
            <Route path={match.url+"/detail"} component={Detail}></Route>
        </div>
    )
}
function Detail(){
    return (
        <div>
            <h3>Detail</h3>
        </div>
    )
}

