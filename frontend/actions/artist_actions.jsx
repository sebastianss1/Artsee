import * as APIUtil from '../util/artist_api_util.jsx';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

export const receiveArtists = artists => ({
    type: RECEIVE_ARTISTS,
    artists
})

export const receiveArtist = artist => ({
    type: RECEIVE_ARTIST,
    artist
})


export const fetchArtists = (artists) => dispatch =>
    APIUtil.fetchArtists(artists)
        .then(artists => dispatch(receiveArtists(artists)))


export const fetchArtist = (artistId) => dispatch => (
    APIUtil.fetchArtist(artistId)
        .then(artist => {
            dispatch(receiveArtist(artist))
        })
)

export const fetchSearch = searchTerm => dispatch => (
    APIUtil.fetchSearch(searchTerm)
        .then(artist => dispatch(receiveArtist(artist)))
)