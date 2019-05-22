import React, { Component } from 'react';
import { Route } from 'react-router-dom'

//componnet 只去渲染一个组件，并且路径要匹配
//render  匹配路径的时候，渲染的是render函数的返回值
//children 不管路径匹配不匹配，都去渲染

const MenuLink = ({to,...props}) => {
    // console.log(props.children)
    return (
        // <span onClick={ ()=>{ } }>{props.children}</span>
        <Route path={ to} {...props} children={(p) => {
            // console.log(p)
            return <span onClick={() => { p.history.push(to) }} className={ p.match ? 'active': ""}>{props.children}</span>
        }}></Route>
    )
}

export default MenuLink; 