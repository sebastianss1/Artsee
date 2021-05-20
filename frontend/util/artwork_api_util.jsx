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

export const likeArtwork = artworkId => (
    $.ajax({
        method: 'POST',
        url: `/api/artworks/${artworkId}/like`
    })
)

export const unlikeArtwork = artworkId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/artworks/${artworkId}/unlike`
    })
)

export const fetchSearch = searchTerm => (
    $.ajax({
        method: 'GET',
        url: `/api/artworks/search/${searchTerm}`
    })
)