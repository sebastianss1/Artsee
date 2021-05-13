export const fetchArtworks = (title) => (
    $.ajax({
        method: 'GET',
        url: 'api/artworks',
        data: { title }
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