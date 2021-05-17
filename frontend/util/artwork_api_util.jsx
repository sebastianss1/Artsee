export const fetchArtworks = () =>  (
    $.ajax({
        method: 'GET',
        url: 'api/artworks'
    })
)

export const fetchArtwork = artworkId => (
    $.ajax({
        method: 'GET',
        url: `api/artworks/${artworkId}`
    })
)

export const fetchSearch = searchTerm => (
    $.ajax({
        method: 'GET',
        url: `/api/artworks/search/${searchTerm}`
    })
)

window.fetchArtwork = fetchArtwork;