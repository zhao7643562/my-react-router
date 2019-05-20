import React from 'react';
import { render } from 'react-dom';

import {
    BrowserRouter as Router, //起个别名 
    Route,
    Switch,  //路由匹配只匹配一个
    Redirect, //重定向
    Link,//跳转
    NavLink //标识
} from 'react-router-dom'

import Home from './pages/Home/Home'
import Activities from './pages/Activities/Activities'
import Login from './pages/Login/Login'
import Topics from './pages/Topics/Topics'
import Article from './pages/Article/Article'

import PrivateRoute from './Components/PrivateRoute'
//HashRouter  BrowserRouter
//哈希路由    浏览器路由

import App from './App'

import './styles/index.css'
import './styles/reset.css'

render(
    <Router>
        <App>
            <Switch>
                {/* exact="true" 严格匹配 */}
                <Route path="/" exact component={Home}></Route>
                <Route path="/activities" component={Activities}></Route>
                <PrivateRoute path="/topics" component={Topics}></PrivateRoute>
                <Route path="/login" component={Login}></Route>
                <Route path="/article/:id" component={Article}></Route>
                <Redirect to="/"></Redirect>
            </Switch>
        </App>

    </Router>, document.getElementById('root'));


