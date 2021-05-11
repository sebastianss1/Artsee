import React from 'react';
import { Route, Switch, Link, Redirect, HashRouter } from 'react-router-dom';
import WelcomeContainer from './welcome/welcome_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ModalContainer from './modal/modal-container'
import NavHeader from './nav-header/nav-header'

const App = () => (
   <div>
   <header>
    <ModalContainer />
    <NavHeader />
    </header>
    <Switch>
      <Route path="/login" component={LogInFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={WelcomeContainer} />
    </Switch >
    </div>
);

export default App;