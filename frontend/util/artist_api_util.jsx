export const fetchArtists = () => {
    return (
        $.ajax({
            method: 'GET',
            url: 'api/artists'
        })
    )
}


export const fetchArtist = artistId => (
    $.ajax({
        method: 'GET',
        url: `api/artists/${artistId}`
    })
)

export const followArtist = artistId => (
    $.ajax({
        method: 'POST',
        url: `/api/artists/${artistId}/follow`
    })
)

export const unfollowArtist = artistId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/artists/${artistId}/unfollow`
    })
)


export const fetchSearch = searchTerm => (
    $.ajax({
        method: 'GET',
        url: `/api/artist/search/${searchTerm}`
    })
)

window.fetchArtists = fetchArtists;
