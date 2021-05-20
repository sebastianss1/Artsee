import { RECEIVE_ARTISTS, RECEIVE_ARTIST, TOGGLE_FOLLOW } from '../actions/artist_actions';
import { RECEIVE_ARTWORK, RECEIVE_ARTWORKS } from '../actions/artwork_actions'
import { RECEIVE_GALLERIES } from '../actions/gallery_actions'


const artistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ARTISTS:
            return Object.assign({}, action.artists);
        case RECEIVE_ARTIST:
            const artist = { [action.artist.id]: action.artist };
            return Object.assign({}, state, artist);
        case TOGGLE_FOLLOW:
            return Object.assign({}, state, { [action.value.id]: action.value });
        case RECEIVE_ARTWORK: 
            return Object.assign({}, state, { [action.artist.id]: action.artist } )
        case RECEIVE_ARTWORKS:
            return Object.assign({}, action.artist);
        // case RECEIVE_GALLERIES:
        //     return Object.assign({}, action.gallery);
        default:
            return state;
    }
}

export default artistsReducer;