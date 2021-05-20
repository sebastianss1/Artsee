import { TOGGLE_FOLLOW } from '../actions/artist_actions';


const followsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return Object.assign({}, state, { [action.value.id]: action.value });
        default:
            return state;
    }
}

export default followsReducer;