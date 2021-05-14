import { connect } from 'react-redux';
import { fetchArtist, fetchArtists } from '../../actions/artist_actions';
import ArtistShow from './artist_show';


const mapStateToProps = (state) => {
    return {
        artists: Object.values(state.entities.artists),
    }
}

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists()),
    fetchArtist: (id) => dispatch(fetchArtist(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow)