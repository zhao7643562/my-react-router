import React, { Component } from 'react';
import './Login.css'
class Login extends Component {
  state = {
    //检测Login有没有包含"Login=true"字符串
    isLogin: document.cookie.includes("Login=true")
  }
  

  render() {
    // console.log(this.props)
    // console.log(document.cookie.includes("Login=true"))
    return (
      <div>
        <button onClick={this.handleClick} className="login-btn">{ this.state.isLogin ? '退出' : "登陆"}</button>
      </div>
    )
  }
  handleClick = () => {
    const isLogin = this.state.isLogin;
    // console.log(isLogin)
    //删除login值
    if (isLogin) {
      this.setCookie("login", "", -1)
    } else {
      this.setCookie("login", true, 300);
      //跳转回去
      this.jumpBack()
    }
    this.setState({
      isLogin: !isLogin
    })
  }
  //设置cookie
  setCookie = (key, value, day) => {
    // document.cookie = "login=true;expires"
    const expires = day * 24 * 60 * 60 * 1000;
    const date = new Date(+new Date() + expires);
    document.cookie = `${key}=${value};expires=${date.toUTCString()}`
  }
  jumpBack = () => {
    const { location,history } = this.props;
    const from = location.state && location.state.from;
    if(from){
      alert('回到上一级页面')
    }

    if(from === '/'){
      history.push({
        pathname:from,
        state:{
          article:location.state.article
        }
      })
    }else if( from ){
      history.push(from)
    }
  }
}

export default Login;