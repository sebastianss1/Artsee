import { connect } from 'react-redux';
import { fetchArtworks } from '../../actions/artwork_actions';
import FeaturedArtworks from './featured_artworks'
import { popUpModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {

    return ({
        artworks: Object.values(state.entities.artworks)
        })
}


const mapDispatchToProps = (dispatch) => {
    return ({
        fetchArtworks: () => dispatch(fetchArtworks()),
        popUpModal: modal => dispatch(popUpModal(modal))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedArtworks)