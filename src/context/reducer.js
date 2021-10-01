import { LOGIN, GET_PEOPLE } from './types'

export default (state, action) => {
    switch(action.type) {
        case LOGIN: 
            return {
                ...state,
                token: action.payload
            }
        case GET_PEOPLE:
            return {
                ...state,
                people: action.payload
            }

        default:
            return state;
    }
}