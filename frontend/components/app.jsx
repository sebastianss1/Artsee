import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomeContainer from './welcome/welcome_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => (
   <div>
   <header>
        <WelcomeContainer />
    </header>
    <Switch>
      <Route path="/login" component={LogInFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} />
    </Switch >
    </div>
);

export default App;