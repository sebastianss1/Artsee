import * as APIUtil from '../util/artist_api_util.jsx';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const TOGGLE_FOLLOW = "TOGGLE_FOLLOW"

export const receiveArtists = (artists, gallery) => ({
    type: RECEIVE_ARTISTS,
    artists, gallery
})

export const receiveArtist = (artist, gallery, artworks) => ({
    type: RECEIVE_ARTIST,
    artist, gallery, artworks
})


const toggleFollow = value => {
    return ({
        type: TOGGLE_FOLLOW,
        value
    })
}

export const fetchArtists = (artists) => dispatch =>
    APIUtil.fetchArtists(artists)
        .then(({artists, gallery}) => dispatch(receiveArtists(artists, gallery)))


export const fetchArtist = (artistId) => dispatch => (
    APIUtil.fetchArtist(artistId)
        .then(({artist, gallery, artworks }) => {
            dispatch(receiveArtist(artist, gallery, artworks))
        })
)

export const fetchSearch = searchTerm => dispatch => (
    APIUtil.fetchSearch(searchTerm)
        .then(artist => dispatch(receiveArtist(artist)))
)


export const followArtist = artistId => dispatch => {
    return (
        APIUtil.followArtist(artistId).then(artist => (
            dispatch(toggleFollow(artist))
        ))
    );
}

export const unfollowArtist = artistId => dispatch => {
    return (
        APIUtil.unfollowArtist(artistId).then(artist => (
            dispatch(toggleFollow(artist))
        ))
    );
}