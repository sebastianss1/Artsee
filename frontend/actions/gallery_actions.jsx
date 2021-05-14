import * as APIUtil from '../util/gallery_api_util';

export const RECEIVE_GALLERIES = "RECEIVE_GALLERIES";
export const RECEIVE_GALLERY = "RECEIVE_GALLERY";

export const receiveGalleries = galleries => ({
    type: RECEIVE_GALLERIES,
    galleries
})

export const receiveGallery = gallery => ({
    type: RECEIVE_GALLERY,
    gallery
})

export const fetchGalleries = (galleries) => dispatch =>
    APIUtil.fetchGalleries(galleries)
        .then(galleries => dispatch(receiveGalleries(galleries)))


export const fetchGallery = (galleryId) => dispatch => (
    APIUtil.fetchGallery(galleryId)
        .then(gallery => {
            dispatch(receiveGallery(gallery))
        })
)

export const fetchSearch = searchTerm => dispatch => (
    APIUtil.fetchSearch(searchTerm)
        .then(gallery => dispatch(receiveGallery(gallery)))
)
