import { RECEIVE_ARTWORKS, RECEIVE_ARTWORK, TOGGLE_LIKE } from '../actions/artwork_actions';


const artworksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ARTWORKS:
            return Object.assign({}, action.artworks);
        case RECEIVE_ARTWORK:
            const artwork = { [action.artwork.id]: action.artwork };
            return Object.assign({}, state, artwork);
        case TOGGLE_LIKE:
            return Object.assign({}, state, { [action.value.id]: action.value})
        default:
            return state;
    }
}

export default artworksReducer;