import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);

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

  handleDemo(e) {
    this.setState({ email: 'test@gmail.com', password: 'test1234'})
  }

  handleValidation() {
    let errors = {};
    let formIsValid = true;

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
    return(
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
        <form onSubmit={this.handleSubmit} className="login-form-modal">

          <span onClick={this.props.closeModal} className="close-x"> X </span>
          <img className="modal-logo" src={window.header_logo} />
          <p className="modal-text">The art world online</p>
          <div className="login-form">

              <input 
                type="email"
                value={this.state.email}
                placeholder="Enter your email"
                onChange={this.update('email')}
                className="login-input"
              />
              
            <br/>
            <span className="error-style" style={{ color: "red" }}>{this.state.errors["email"]}</span>

              <input type="password"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            <br />
            <span className="error-style" style={{ color: "red" }}>{this.state.errors["password"]}</span>
            <br /><br />
            <input className="login-submit-form" type="submit" value={this.props.formType} /> 
            <button className="login-submit-form" onClick={this.handleDemo}>Continue as Demo User</button>
          </div>
        </form>
        <br />
        <div className="already-account-detail">Don't have an account?
                <a href="#" onClick={() => this.props.popUpModal('signup')}> Sign up</a> </div>

      </div>
    );
  }
}

export default LoginForm;

