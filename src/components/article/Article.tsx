import React from 'react';
import './article.css';
import imageUrl from '../../assets/blog05.png';

interface Props {
    imgUrl: any,
    date: string,
    text: string
}

function Article({imgUrl, date, text}: Props) {

    return (
        <div className="gpt3__blog section__padding">
            <div className="gpt3__blog-container_article-image">
                <img src={imgUrl} alt="blog image"/>
            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>{text}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article;