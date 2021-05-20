import { connect } from 'react-redux';
import { fetchArtwork, fetchArtworks } from '../../actions/artwork_actions';
import ArtworkIndex from './artwork_index';

const mapStateToProps = (state, ownProps) => {
    let artworks = Object.values(state.entities.artworks)
    let artwork = state.entities.artworks[ownProps.match.params.artworkId]
    let artist = state.entities.artists[artwork?.artistId]
    let gallery = state.entities.artists[artist?.galleryId]

    return { 
        artworks: Object.values(state.entities.artworks),
        artists: state.entities.artists,
        galleries: state.entities.galleries

    }
}

const mapDispatchToProps = dispatch => ({
    fetchArtworks: () => dispatch(fetchArtworks()),
    fetchArtwork: (id) => dispatch(fetchArtwork(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkIndex)