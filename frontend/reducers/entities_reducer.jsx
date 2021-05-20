import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import artworksReducer from './artworks_reducer'
import artistsReducer from './artists_reducer'
import galleriesReducer from './galleries_reducer'
import followsReducer from './follows_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    artworks: artworksReducer,
    artists: artistsReducer,
    galleries: galleriesReducer,
    follows: followsReducer
});

export default entitiesReducer;