import React from 'react';
import { Route, Switch, Link, Redirect, HashRouter } from 'react-router-dom';
import WelcomeContainer from './nav-header/welcome/welcome_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ModalContainer from './modal/modal-container'
import NavHeader from './nav-header/nav-header'
import SplashContainer from './splash/splash_container';

const App = () => (
   <div>
    <ModalContainer />
     <header>
      <NavHeader />
    </header>
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
      <Redirect to="/" />
    </Switch >
    </div>
);

export default App;