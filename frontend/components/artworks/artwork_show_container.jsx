import { connect } from 'react-redux';
import { fetchArtwork } from '../../actions/artwork_actions';

import ArtworkShow from './artwork_show';


const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        artworks: Object.values(state.entities.artworks),
        artwork: state.entities.artworks[ownProps.match.params.artworkId],
    }
}

const mapDispatchToProps = dispatch => ({
    fetchArtworks: () => dispatch(fetchArtworks()),
    fetchArtwork: (id) => dispatch(fetchArtwork(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkShow)