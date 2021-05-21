import React from 'react'
import SplashHeader from './splash_header'
import SplashBody from './splash_body'
import { connect } from 'react-redux';
import { popUpModal } from '../../actions/modal_actions'


class SplashContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="splash-main-container">
                <SplashHeader 
                popUpModal={this.props.popUpModal}
                className='splash' />
                <SplashBody className='splash-body' />
            </div>
        )
    }
};

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <span><button onClick={(e) => {
                e.preventDefault();
                dispatch(popUpModal('Sign up'))
            }
            }>Log in</button></span>
        ),
        closeModal: () => dispatch(closeModal()),
        popUpModal: modal => dispatch(popUpModal(modal))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer);