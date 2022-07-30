import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { SETARTICLE } from '../Action/Action';
import ShowArticles from  './ShowArticles';

const mapStatetoProps = (state) => ({ tagsInfo : state.tags});

const mapDispatchtoProps = (dispatch) => ({ articleInfo: (articles) => dispatch(SETARTICLE(articles))});

function Tags({tagsInfo, articleInfo}) {

    const handleTagClick = (e) => { 
        axios.get(`https://dev.to/api/articles?tag=${e.target.value}`).then( (response) => {
            articleInfo(response.data)
        }) 
    }

    return (
        <>
        <div className="tag-btn-container">
            {
                tagsInfo.tags.map( (tag) => 
                    <button onClick={handleTagClick} key={tag.id} value={tag.name} style={{background: tag.bg_color_hex, color: tag.text_color_hex}}>
                        {tag.name}
                    </button> 
                )
            }
        </div>
        
        <ShowArticles />
        </>
    )
}

const tagsComponent = withRouter(Tags)
export default connect(mapStatetoProps, mapDispatchtoProps)(tagsComponent);
