import React from 'react'
import SplashHeader from './splash_header'
import SplashBody from './splash_body'
import { connect } from 'react-redux';


class SplashContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="splash-main-container">
                <SplashHeader className='splash' />
                <SplashBody className='splash-body' />
            </div>
        )
    }
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
        popUpModal: (modal) => dispatch(popUpModal(modal))
    }
};


export default connect(mapDispatchToProps)(SplashContainer);