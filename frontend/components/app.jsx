import React from 'react';
import { Route, Switch, Link, Redirect, HashRouter } from 'react-router-dom';
import ModalContainer from './modal/modal-container'
import NavHeader from './nav-header/nav-header'
import SplashContainer from './splash/splash_container';
import ArtistShowContainer from './artists/artist_container'
import ArtworkShowContainer from './artworks/artwork_show_container'
import GalleryContainer from './galleries/gallery_container'

const App = () => (
   <div>
    <ModalContainer />
     <header>
      <NavHeader />
    </header>
    <Switch>
      <Route exact path="/artworks" component={ArtworkShowContainer} />
      <Route exact path="/artists" component={ArtistShowContainer} />
      <Route exact path="/galleries" component={GalleryContainer} />
      <Route exact path="/" component={SplashContainer} />
      <Redirect to="/" />
    </Switch >
    </div>
);

export default App;