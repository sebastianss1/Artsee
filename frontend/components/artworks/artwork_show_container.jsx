import { connect } from 'react-redux';
import { fetchArtwork, fetchArtworks, likeArtwork, unlikeArtwork } from '../../actions/artwork_actions';
import { followArtist, unfollowArtist} from '../../actions/artist_actions'
import ArtworkShow from './artwork_show';


const mapStateToProps = (state, ownProps) => {
    
    let artwork = state.entities.artworks[ownProps.match.params.artworkId]
    let artist = state.entities.artists[artwork?.artistId]
    let theBoolean = Object.values(state.entities.follows).some(follow => follow.followableId === artist.id && follow.followableType === 'Artist')

    return {
        artworks: Object.values(state.entities.artworks),
        artwork: state.entities.artworks[ownProps.match.params.artworkId],
        artist: state.entities.artists[artwork?.artistId],
        theBoolean,
        currentUser: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = dispatch => ({
    fetchArtworks: () => dispatch(fetchArtworks()),
    fetchArtwork: (id) => dispatch(fetchArtwork(id)),
    followArtist: artist => dispatch(followArtist(artist)),
    unfollowArtist: artist => dispatch(unfollowArtist(artist)),
    likeArtwork: artwork => dispatch(likeArtwork(artwork)),
    unlikeArtwork: artwork => dispatch(unlikeArtwork(artwork)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkShow)