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
        url: `api/artist/${artistId}`
    })
)

export const fetchSearch = searchTerm => (
    $.ajax({
        method: 'GET',
        url: `/api/artist/search/${searchTerm}`
    })
)

window.fetchArtists = fetchArtists;
