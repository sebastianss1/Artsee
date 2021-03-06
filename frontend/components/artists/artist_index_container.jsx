import { connect } from 'react-redux';
import { fetchArtist, fetchArtists, followArtist, unfollowArtist } from '../../actions/artist_actions';
import ArtistIndex from './artist_index';


const mapStateToProps = (state) => {
    return {
        artists: Object.values(state.entities.artists),
        galleries: state.entities.galleries
    }
}

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists()),
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    followArtist: (id) => dispatch(followArtist(id)),
    unfollowArtist: artist => dispatch(unfollowArtist(artist))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex)