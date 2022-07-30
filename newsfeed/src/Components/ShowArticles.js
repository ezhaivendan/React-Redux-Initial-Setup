import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SETARTICLE } from '../Action/Action';
import axios from 'axios'

const mapStatetoProps = (state) => ({ articleInfo : state.articles})

const mapDispatchtoProps = (dispatch) => ({ articleDispatch: (articles) => dispatch(SETARTICLE(articles))});

function ShowArticles({ articleInfo, articleDispatch }) {
   
    const articleTagClick = (tag) => { 
        axios.get(`https://dev.to/api/articles?tag=${tag}`).then( (response) => {
            articleDispatch(response.data)
        }) 
    }

    return (
        <>
        <div className="article-container">
            {
                articleInfo.map( (article, index) => 
                    <div className="article-box" key={index}>
                        <div className="author">
                            <div><img src={article.user.profile_image_90}></img></div>
                            <div>
                                <p className="article.user-name">{article.user.name}</p>
                                <span className="date">{article.readable_publish_date}</span>
                            </div>
                        </div>
                        <div className="article-title"><a href={article.url} target="_blank">{article.title}</a></div>
                        <div className="article-tags">
                            {article.tag_list.map( (tag, index) => 
                            <span onClick={() => articleTagClick(tag)} key={index}>#{tag} </span>
                            )}
                        </div>
                    </div>
                )
            }
        </div>
        </>
    )
}

const articleComponent = withRouter(ShowArticles)
export default connect(mapStatetoProps, mapDispatchtoProps)(articleComponent);
