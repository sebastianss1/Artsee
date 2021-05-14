import * as APIUtil from '../util/artwork_api_util';

export const RECEIVE_ARTWORKS = "RECEIVE_ARTWORKS";
export const RECEIVE_ARTWORK = "RECEIVE_ARTWORK";

export const receiveArtworks = artworks => ({
    type: RECEIVE_ARTWORKS,
    artworks
})

export const receiveArtwork = artwork => ({
    type: RECEIVE_ARTWORK,
    artwork
})

debugger
export const fetchArtworks = (artworks) => dispatch => 
    APIUtil.fetchArtworks(artworks)
        .then(artworks => dispatch(receiveArtworks(artworks)))


export const fetchArtwork = (artworkId) => dispatch => (
    APIUtil.fetchArtwork(artworkId)
        .then(artwork => {
            dispatch(receiveArtwork(artwork))
        })
)

export const fetchSearch = searchTerm => dispatch => (
    APIUtil.fetchSearch(searchTerm)
        .then(artwork => dispatch(receiveArtwork(artwork)))
)