import { RECEIVE_ARTWORKS, RECEIVE_ARTWORK, TOGGLE_LIKE } from '../actions/artwork_actions';
import { RECEIVE_ARTIST} from '../actions/artist_actions'
import { RECEIVE_GALLERIES } from '../actions/gallery_actions'


const artworksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ARTWORKS:
            return Object.assign({}, action.artworks);
        case RECEIVE_ARTWORK:
            const artwork = { [action.artwork.id]: action.artwork };
            return Object.assign({}, state, artwork);
        case RECEIVE_GALLERIES:
            return Object.assign({}, action.artworks)
        case RECEIVE_ARTIST:
            return Object.assign({}, action.artworks)
        case TOGGLE_LIKE:
            return Object.assign({}, state, { [action.value.id]: action.value})
        default:
            return state;
    }
}

export default artworksReducer;