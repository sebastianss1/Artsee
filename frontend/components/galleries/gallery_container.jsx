import { connect } from 'react-redux';
import { fetchGallery, fetchGalleries } from '../../actions/gallery_actions';
import Gallery from './gallery';


const mapStateToProps = (state) => {
    return {
        galleries: Object.values(state.entities.galleries),
    }
}

const mapDispatchToProps = dispatch => ({
    
    fetchGalleries: () => dispatch(fetchGalleries()),
    fetchGallery: (id) => dispatch(fetchGallery(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)