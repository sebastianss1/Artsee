import React from 'react';
import { Route, Switch, Link, Redirect, HashRouter } from 'react-router-dom';
import WelcomeContainer from './nav-header/welcome/welcome_container'
import ModalContainer from './modal/modal-container'
import NavHeader from './nav-header/nav-header'
import SplashContainer from './splash/splash_container';
import ArtworksContainer from './artworks/artwork_show_container'
import ArtworkShowContainer from './artworks/artwork_show_container'

const App = () => (
   <div>
    <ModalContainer />
     <header>
      <NavHeader />
    </header>
    <Switch>
      <Route exact path="/artworks/:id" component={ArtworkShowContainer} />
      <Route exact path="/" component={SplashContainer} />
      <Redirect to="/" />
    </Switch >
    </div>
);

export default App;