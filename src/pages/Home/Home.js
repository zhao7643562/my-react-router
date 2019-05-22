import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  //required   提示input不能是空的

  articleInput = React.createRef()
  authorInput = React.createRef()

  componentDidMount() {
    // console.log(this.props)
    const { location } = this.props;
    const articleInfo = location.state && location.state.article;
    if (articleInfo) {
      this.authorInput.current.value = articleInfo.author;
      this.articleInput.current.value = articleInfo.title
    }
  }


  render() {
    // console.log(this.props.location)
    return (
      <div className="home">
        <h4>发表话题:</h4>
        <form onSubmit={this.handelSubmit}>
          <div className="form-box">
            <label htmlFor="author">作者姓名:</label>
            <input autoComplete='off' id="author" required ref={this.authorInput}></input>
          </div>
          <div className="form-box">
            <label htmlFor="article">文章标题:</label>
            <input autoComplete='off' id="article" required ref={this.articleInput}></input>
          </div>
          <button className="confirm-btn" >提交</button>
        </form>

      </div>
    )
  }
  handelSubmit = (e) => {
    //阻止form默认事件
    e.preventDefault()
    // console.log(this.authorInput)
    const isLogin = document.cookie.includes("login=true")
    const author = this.authorInput.current.value;
    const title = this.articleInput.current.value;
    const id = Math.floor(Math.random() * 1000000000000000)

    const article = {
      author,
      title,
      id
    }
    // console.log(article)
    // console.log(isLogin)
    if (isLogin) {
      this.setArticleStorage(article);
    } else {
      alert("你还没有登陆,不能发表话题，跳转到登陆页面")
      //跳转
      this.props.history.push({
        pathname: '/login',
        state: {
          article,
          //从哪里跳转的路径传递给Login.js
          from: this.props.location.pathname
        }
      })
    }

  }

  //设置缓存
  setArticleStorage = (article) => {
    //JSON.parse()转换为数组
    //localStorage.getItem()  设置缓存
    //ocalStorage.setItem()   设置缓存内容
    //JSON.stringify()  变为字符串
    const articleList = JSON.parse(localStorage.getItem('articleList')) || [];
    // console.log(article)
    articleList.push(article);
    // console.log(JSON.stringify(articleList))
    localStorage.setItem('articleList', JSON.stringify(articleList))
    this.jumpToTopics()
  }
  //路径跳转
  jumpToTopics = () => {
    // console.log(this.props)
    this.props.history.push('/topics')
  }
}

export default Home;