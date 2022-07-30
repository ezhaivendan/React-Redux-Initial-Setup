import tagsJson from '../Data/Tags.json'

let initialState = { tags : tagsJson, articles: [] }

export const newsFeed = ( state = initialState, action) => {
    switch(action.type) {
        case 'SET_ARTICLE':
            return {
                ...state, 
                articles: [...action.articles]
                
            }
        
        default:
            return state
    }
}
