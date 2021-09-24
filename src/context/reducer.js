import {} from './types'

export default (state, action) => {
    switch(action.type) {
        case FORM_PROJECT: 
            return {
                ...state,
                newProjectForm: true
            }

        default:
            return state;
    }
}