import React from 'react';
import './Article.css'

//精简的话 可以把props 换成 { match,location }


const Article = (props) => {
    const { match, location } = props;
    return (
        <div className="article">
            <div>
                文章ID:{match.params.id}
            </div>
            <div>
                文章作者:
                    <span>{location.state.author}</span>
            </div>
            <div>
                文章标题:
                    <span>{location.state.title}</span>
            </div>
        </div>
    )
}

export default Article;