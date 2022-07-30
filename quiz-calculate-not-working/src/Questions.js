import React from 'react'

class Questions extends React.Component {
    constructor() {
        super();
        this.state = {
            questions: [],
            options: []
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {questions: props.question};
    }

    componentDidMount() {
        const questionWithOptions = this.state.questions.map((question, index) => {
            question.incorrect_answers.push(question.correct_answer);
            question.incorrect_answers.sort(() => Math.random()-0.7);
            return question
        });
        this.setState({options: questionWithOptions})
    }

    render() {
        const validation = (questionArr) => {
            let validation = true;
            questionArr.forEach((question, index) => {
                const selector = `input[name=answer${index}]:checked`;
                const answerContainer = document.getElementById('question-container');
                question.userAnswer = (answerContainer.querySelector(selector) || {}).value;
                if( question.userAnswer !== undefined) {
                    validation = true;
                    document.getElementById(`question-${index}`).style.color = 'green';
                }
                if( question.userAnswer === undefined) {
                    validation = false;
                    document.getElementById(`question-${index}`).style.color = 'red';
                }
            });
            return validation;
        }

        const calculateResult = () => {
            let questionArr = this.state.questions;
            if(!validation(questionArr)){
                return;
            }
            let count = 0;
            questionArr.forEach((question, index) => {
                if(question.userAnswer === question['correct_answer']) {
                    count++;
                }
                document.getElementById(`answer-container-${index}`).style.display ='block';
                document.getElementById(`answer-container-${index}`).innerHTML = questionArr[index].correct_answer;
            });
            document.getElementById('result-container').innerHTML = `${count}/${questionArr.length}`;
        }

        return (
            <React.Fragment>
                <div id="question-form-container">
                <div id="question-container">
                    {   
                        this.state.options.map( (question, index) => {
                            return(
                                <React.Fragment>
                                    <div key={index}><p id={`question-${index}`} dangerouslySetInnerHTML={{ __html: question.question }}></p>
                                        {question.incorrect_answers.map((ans, ansIndex) => <div key={ansIndex}>
                                            <input type="radio" name={`answer${index}`} value={ans} />
                                            <label>{ans}</label></div>
                                        )}
                                        <p id={`answer-container-${index}`} style={{ color: 'green' }}></p>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                <button onClick={calculateResult}>Submit</button>
                </div>
                <div  id="result-container"></div>
            </React.Fragment>
        )
    }
}

export default Questions;