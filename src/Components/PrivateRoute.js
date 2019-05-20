import React from 'react';
import { Route,Redirect } from 'react-router-dom'

//Route 路由
//Redirect 重定向

//属性校验
const PrivateRoute = ({ component:Component, ...props }) => {
    return (
        //render 里边有参数的属性
        <Route {...props} render={(p) => {
            const isLogin = document.cookie.includes('login=true')
           
            if (isLogin) {
                return <Component></Component>
            }else{
                alert("你还没有登陆,需转至登陆页进行登陆")
                return <Redirect to={{
                    pathname:"/login",
                    state:{
                        from:p.location.pathname
                    }
                }}></Redirect>
            }

        }}></Route>
    )
}

export default PrivateRoute