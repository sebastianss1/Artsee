import { connect } from 'react-redux';
import { fetchGallery, fetchGalleries } from '../../actions/gallery_actions';
import GalleryIndex from './gallery_index';


const mapStateToProps = (state) => {
    return {
        galleries: Object.values(state.entities.galleries),
    }
}

const mapDispatchToProps = dispatch => ({
    
    fetchGalleries: () => dispatch(fetchGalleries()),
    fetchGallery: (id) => dispatch(fetchGallery(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(GalleryIndex)