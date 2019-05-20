import React, { Component } from 'react';
import { NavLink,Route,withRouter } from 'react-router-dom'
import './style.css'

//如果页面想使用路由的方法，还不是一个页面组件，就用withRouter包装一下

//自己的withRouter
// const withRouter = (component) => () => <Route component={component}></Route>

//等价于上边那个
// const withRouter = (component) =>{
//     return ()=>{
//         return <Route component={component}></Route>
//     }
// }

class Nav extends Component {

    render() {
        return (
            <div className="nav">
                <span className="logo" onClick={this.handleClick}>渡一教育</span>
                <NavLink to="/" exact>首页</NavLink>
                <NavLink to="/activities" exact>话题</NavLink>
                <NavLink to="/topics" exact>动态</NavLink>
                <NavLink to="/login" exact>登陆</NavLink>

            </div>
        )
    }
    handleClick = () => {
        // console.log(this.props.history)
        this.props.history.push('/');
    }

}

export default withRouter(Nav);