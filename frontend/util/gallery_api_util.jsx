export const fetchGalleries = () => {
    return (
        $.ajax({
            method: 'GET',
            url: 'api/galleries'
        })
    )
}

export const fetchGallery = galleryId => (
    $.ajax({
        method: 'GET',
        url: `api/galleries/${galleryId}`
    })
)

export const fetchSearch = searchTerm => (
    $.ajax({
        method: 'GET',
        url: `/api/gallery/search/${searchTerm}`
    })
)

window.fetchGalleries = fetchGalleries;