import { connect } from 'react-redux';
import { fetchArtist, fetchArtists, followArtist, unfollowArtist } from '../../actions/artist_actions';
import ArtistShow from './artist_show';


const mapStateToProps = (state, ownProps) => {
    return {
        artist: state.entities.artists[ownProps.match.params.artistId]
    }
}

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists()),
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    followArtist: artist => dispatch(followArtist(artist)),
    unfollowArtist: artist => dispatch(unfollowArtist(artist))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow)