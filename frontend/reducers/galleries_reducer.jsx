import { RECEIVE_GALLERIES, RECEIVE_GALLERY } from '../actions/gallery_actions';
import { RECEIVE_ARTWORKS } from '../actions/artwork_actions'
import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions'


const galleriesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_GALLERIES:
            return Object.assign({}, action.galleries);
        case RECEIVE_GALLERY:
            const gallery = { [action.gallery.id]: action.gallery };
            return Object.assign({}, state, gallery);
        case RECEIVE_ARTWORKS:
            return Object.assign({}, action.gallery)
        case RECEIVE_ARTISTS: 
            return Object.assign({}, action.gallery)
        case RECEIVE_ARTIST: 
            return Object.assign({}, action.gallery)
        default:
            return state;
    }
}

export default galleriesReducer;