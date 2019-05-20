import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import Nav from './Components/nav/Nav';
import "./styles/app.css"
class c extends Component {

    render() {
        return (
            <div className="app">
                <Nav></Nav>
                {/* 高阶组件 由一个组件返回一个组件 */}
                {/* <Route path="/" component={Nav}></Route> */}
                <div className="content">
                    {this.props.children}
                </div>

                {/* 显示组件内容 */}
            </div>
        )
    }

}

export default c;