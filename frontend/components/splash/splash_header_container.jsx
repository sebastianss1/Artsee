import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import SplashHeader from './splash_header';
import { popUpModal } from '../../../actions/modal_actions';


const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    popUpModal: modal => dispatch(popUpModal(modal))

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SplashHeader);
