import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
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
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal)
  }

  handleDemo(e) {
    this.setState({ email: 'test@gmail.com', password: 'test123'})
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
          <br/>
          <span onClick={this.props.closeModal} className="close-x"> X </span>
          <img className="modal-logo" src={window.header_logo} />
          <p className="modal-text">The art world online</p>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
              <input type="text"
                value={this.state.email}
                placeholder="Enter your email"
                onChange={this.update('email')}
                className="login-input"
              />
            <br/><br/>
              <input type="password"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            <br/>
            <br/>
            <input className="login-submit" type="submit" value={this.props.formType} /> <br /> <br />
            <button className="login-submit" onClick={this.handleDemo}>Continue as Demo User</button>
          </div>
        </form>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default LoginForm;

