import { connect } from 'react-redux';
import { fetchArtwork, fetchArtworks } from '../../actions/artwork_actions';
import ArtworkIndex from './artwork_index';

const mapStateToProps = (state, ownProps) => {
    debugger
    return { 
        artworks: Object.values(state.entities.artworks),
        artwork: state.entities.artworks[ownProps.match.params.artworkId]
    }
}

const mapDispatchToProps = dispatch => ({
    fetchArtworks: () => dispatch(fetchArtworks()),
    fetchArtwork: (id) => dispatch(fetchArtwork(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkIndex)