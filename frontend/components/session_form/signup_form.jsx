import React from 'react';
import { popUpModal } from '../../actions/modal_actions'



class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                email: '',
                password: '',
                name: '',
                errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            const user = Object.assign({}, this.state);
            this.props.processForm(user).then(this.props.closeModal)
        } 
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;

        if (!this.state["name"]) {
            formIsValid = false;
            errors["name"] = "Name is required.";
        }

        if (!this.state["email"]) {
            formIsValid = false;
            errors["email"] = "Please enter a valid email.";
        }

        if (!this.state["password"]) {
            formIsValid = false;
            errors["password"] = "Password required.";
        }


        this.setState({ errors: errors });
        return formIsValid;
    }



    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-modal">
                <span onClick={this.props.closeModal} className="close-x"> X </span>
                    <img className="modal-logo" src={window.header_logo} />
                    <div className="modal-text">The art world online</div>
                    <div className="signup-form">
                        <br />
                        <label>
                            <input type="email"
                                placeholder="Enter your email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                />
                            <br />
                            <span className="error-style" style={{ color: "red" }}>{this.state.errors["email"]}</span>
                        </label>
                        <label>
                            <input type="password"
                                placeholder="Enter your password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                />
                            <br />
                            <span className="error-style"  style={{ color: "red" }}>{this.state.errors["password"]}</span>
                        </label>
                        
                        <figcaption className="password-detail">Password must be at least 8 characters.</figcaption>

                        <label>
                            <input type="text"
                                value={this.state.name}
                                placeholder="Enter your full name"
                                onChange={this.update('name')}
                                className="login-input"
                                />
                            <br />
                            <span className="error-style"  style={{ color: "red" }}>{this.state.errors["name"]}</span>
                        </label>
                        <br /><br />
                        {/* {this.renderErrors()} */}
                        <input type="submit" className="signup-submit-form" value={this.props.formType} /> <br/><br/>                    
                        </div>
                </form>    
    
                <div className="already-account-detail">Already have an account?
                <a href="#" onClick={() => this.props.popUpModal('login')}> Login</a> </div>
                </div>
        );
    }
}

export default SignupForm;



