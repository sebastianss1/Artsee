import { connect } from 'react-redux';
import { fetchArtist, fetchArtists, followArtist, unfollowArtist } from '../../actions/artist_actions';
import ArtistShow from './artist_show';


const mapStateToProps = (state, ownProps) => {

    let artist = state.entities.artists[ownProps.match.params.artistId]
    let theBoolean = Object.values(state.entities.follows).some(follow => follow.followableId === artist.id && follow.followableType === 'Artist')
    
    return {
        artists: Object.values(state.entities.artists),
        artist: state.entities.artists[ownProps.match.params.artistId],
        galleries: state.entities.galleries,
        artworks: Object.values(state.entities.artworks),
        theBoolean,
        currentUser: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists()),
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    fetchArtworks: () => dispatch(fetchArtworks()),
    followArtist: artist => dispatch(followArtist(artist)),
    unfollowArtist: artist => dispatch(unfollowArtist(artist))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow)