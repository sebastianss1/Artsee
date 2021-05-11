import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
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
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }


    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>E-mail:
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <p className="password-detail">Password must be at least 8 characters.</p>

                        <br />

                        <label>Name:
                            <input type="text"
                                value={this.state.name}
                                onChange={this.update('name')}
                                className="login-input"
                            />
                            <br />
                            <br/>
                        </label>
                        <input type="submit" className="signup-submit" value={this.props.formType} /> <br/><br/>                    
                        </div>
                </form>       
                </div>
        );
    }
}

export default SignupForm;

