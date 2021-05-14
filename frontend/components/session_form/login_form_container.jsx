import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { popUpModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Login',
        // navLink: <Link to="/signup">sign up</Link>,
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
