import React from 'react';
import axios from 'axios'
import Questions from './Questions'

class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            categoryId: 0,
            level: {},
            questions : []
        }
    }

    render() {

        const enableContainer = (id) => document.getElementById(id).style.display = 'block';
        
        const disableContainer = (id) => document.getElementById(id).style.display = 'none';

        const userSelectedCategory = (e) => {
              disableContainer('quiz-category-level')
              this.setState({ questions: []})
            
            const categoryId = e.target.value
            this.setState({categoryId: e.target.value})
            axios(`https://opentdb.com/api_count.php?category=${categoryId}`)
            .then((response) => {
                this.setState({level: response.data.category_question_count})
                enableContainer('quiz-category-level')
            })
        }

        const userSelectedLevel = (e) => {
            const selectedLevel = e.target.value;
            axios(`https://opentdb.com/api.php?amount=10&category=${this.state.categoryId}&difficulty=${selectedLevel}`)
            .then((response) => {
                this.setState({questions: response.data.results})
                enableContainer('question-form-container')
            });
            // document.getElementById('question-container').innerHTML = formedQuestion.join("");
            
        }

        return (
            <React.Fragment>
                <select name="quiz-category" id="quiz-category" onChange={userSelectedCategory}>
                    <option value="default">Select Category</option>
                    {
                        this.props.category.map((category, index) => (
                            <option key={index} value={category.id}>{category.name}</option>
                        ))
                    }
                </select>

                <select style={{display: 'none'}}  name="quiz-category" id="quiz-category-level" onChange={userSelectedLevel}>
                    <option value="default">Select type</option>
                    <option value="easy">Easy: {this.state.level.total_easy_question_count}</option>
                    <option value='medium'>Medium: {this.state.level.total_medium_question_count}</option>
                    <option value='hard'>Hard: {this.state.level.total_hard_question_count}</option>
                </select>
                
                {this.state.questions.length > 0 && <Questions question={this.state.questions} />}
            </React.Fragment>
        )
    }
}

export default Category;