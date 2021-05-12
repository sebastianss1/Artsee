import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { popUpModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        navLink: <Link to="/login">log in instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <span>
                <button onClick={(e) => {
                    e.preventDefault();
                    dispatch(popUpModal('Login'))
                }
                }>Login</button></span>
        ),
        closeModal: () => dispatch(closeModal()),
        popUpModal: () => dispatch(popUpModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
