import * as APIUtil from '../util/artwork_api_util';

export const RECEIVE_ARTWORKS = "RECEIVE_ARTWORKS";
export const RECEIVE_ARTWORK = "RECEIVE_ARTWORK";
export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const receiveArtworks = artworks => ({
    type: RECEIVE_ARTWORKS,
    artworks
})

export const receiveArtwork = (artwork, artist, gallery) => ({
    type: RECEIVE_ARTWORK,
    artwork, artist, gallery
})

const toggleLike = value => {
    return ({
        type: TOGGLE_LIKE,
        value
    })
}


export const fetchArtworks = (artworks) => dispatch => 
    APIUtil.fetchArtworks(artworks)
        .then(artworks => dispatch(receiveArtworks(artworks)))


export const fetchArtwork = (artworkId) => dispatch => (
    APIUtil.fetchArtwork(artworkId)
        .then(({ artwork, artist, gallery }) => {
            dispatch(receiveArtwork(artwork, artist, gallery))
        })
)

export const fetchSearch = searchTerm => dispatch => (
    APIUtil.fetchSearch(searchTerm)
        .then(artwork => dispatch(receiveArtwork(artwork)))
)

export const likeArtwork = artworkId => dispatch => {
    return (
        APIUtil.likeArtwork(artworkId).then(artwork => (
            dispatch(toggleLike(artwork))
        ))
    )
}

export const unlikeArtwork = artworkId => dispatch => {
    return (
        APIUtil.unlikeArtwork(artworkId).then(artwork => (
            dispatch(toggleLike(artwork))
        ))
    )
}