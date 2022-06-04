import { INSERT_CATEGORIES, INSERT_USER } from './actions'


const inititalState = {
    user: {},
    categories: [],
}

const RootReducer = (state = inititalState, {type, payload}) => {
    switch(type){
        case INSERT_USER:
            return {...state, user: payload};
        case INSERT_CATEGORIES:
            return {...state, categories: payload};
        default:
            return state;
    }
}

export default RootReducer;