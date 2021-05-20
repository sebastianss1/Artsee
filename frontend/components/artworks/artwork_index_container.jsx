import { connect } from 'react-redux';
import { fetchArtwork, fetchArtworks } from '../../actions/artwork_actions';
import ArtworkIndex from './artwork_index';

const mapStateToProps = (state, ownProps) => {
    debugger
    let artworks = Object.values(state.entities.artworks)
    let artwork = state.entities.artworks[artworks.artworkId]
    // let artist = state.entities.artists[artwork.artistId]
    // let gallery = state.entities.galleries[artist.galleryId]

    return { 
        artworks: Object.values(state.entities.artworks),
        artwork: state.entities.artworks[artworks.artworkId],
        // artist: state.entities.artists[artwork?.artistId],
        // gallery: state.entities.artists[artist?.galleryId]
    }
}

const mapDispatchToProps = dispatch => ({
    fetchArtworks: () => dispatch(fetchArtworks()),
    fetchArtwork: (id) => dispatch(fetchArtwork(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkIndex)