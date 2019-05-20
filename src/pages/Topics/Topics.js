import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Topics.css'

class Topics extends Component {

  state = {
    articleList: JSON.parse(localStorage.getItem('articleList')) || []
  }

  render() {
    // console.log(localStorage.getItem('articleList'));
    return (
      <ul className="topics">
        {
          this.state.articleList.reverse().map(item => 
            <li key={item.id} className="topic-box">
              <span>{item.author}</span>
              {/* 传递值发生在跳转那一刻 */}
              <Link to={{
                pathname:`/article/${item.id}`,
                state:{
                  author:item.author,
                  title:item.title
                }
              }}>{item.title}</Link>
            </li>
          )
        }
      </ul>
    )
  }

}

export default Topics;