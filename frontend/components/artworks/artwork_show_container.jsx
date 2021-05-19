import { connect } from 'react-redux';
import { fetchArtwork, fetchArtworks } from '../../actions/artwork_actions';
import { followArtist, unfollowArtist} from '../../actions/artist_actions'
import ArtworkShow from './artwork_show';


const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        artwork: state.entities.artworks[ownProps.match.params.artworkId],
        currentUser: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = dispatch => ({
    fetchArtworks: () => dispatch(fetchArtworks()),
    fetchArtwork: (id) => dispatch(fetchArtwork(id)),
    followArtist: artist => dispatch(followArtist(artist)),
    unfollowArtist: artist => dispatch(unfollowArtist(artist))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkShow)