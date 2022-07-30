import React from 'react'
import Category from './Category' 

class Level extends React.Component {
    render() {
        function userSelectedCategory(e) {
            console.log('coming', e.target.value);
        }
        return(
            console.log('coming', e.target.value)
        )
    }
}

export default Level;