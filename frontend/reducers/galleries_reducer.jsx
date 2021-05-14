import { RECEIVE_GALLERIES, RECEIVE_GALLERY } from '../actions/gallery_actions';


const galleriesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_GALLERIES:
            return Object.assign({}, action.galleries);
        case RECEIVE_GALLERY:
            const gallery = { [action.gallery.id]: action.gallery };
            return Object.assign({}, state, gallery);
        default:
            return state;
    }
}

export default galleriesReducer;