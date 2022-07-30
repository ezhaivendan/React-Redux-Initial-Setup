import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Category from './Category'
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            category: []
        }
    }
    componentDidMount() {
          axios('https://opentdb.com/api_category.php')
            .then((response) => {
                this.setState({category: response.data.trivia_categories});
            })
    }
    render() {
        return (
            <React.Fragment>
                <Category category={this.state.category} />
            </React.Fragment>
        )
    }
}

export default App;