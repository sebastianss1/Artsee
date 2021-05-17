import { RECEIVE_ARTISTS, RECEIVE_ARTIST, TOGGLE_FOLLOW } from '../actions/artist_actions';


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
        default:
            return state;
    }
}

export default artistsReducer;