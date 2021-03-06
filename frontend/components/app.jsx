import React from 'react';
import { Route, Switch, Link, Redirect, HashRouter } from 'react-router-dom';
import ModalContainer from './modal/modal-container'
import NavHeader from './nav-header/nav-header'
import SplashContainer from './splash/splash_container';
import ArtistIndexContainer from './artists/artist_index_container'
import ArtistShowContainer from './artists/artist_show_container'
import ArtworkShowContainer from './artworks/artwork_show_container'
import ArtworkIndexContainer from './artworks/artwork_index_container';
import GalleryIndexContainer from './galleries/gallery_index_container'

const App = () => (
   <div>
    <ModalContainer />
     <header>
      <NavHeader />
    </header>
    <Switch>
      <Route exact path="/artworks/:artworkId" component={ArtworkShowContainer} />
      <Route exact path="/artists/:artistId" component={ArtistShowContainer} />
      {/* <Route exact path="/artists/:galleryId" component={GalleryShowContainer} /> */}
      <Route exact path="/artworks" component={ArtworkIndexContainer} />
      <Route exact path="/artists" component={ArtistIndexContainer} />
      <Route exact path="/galleries" component={GalleryIndexContainer} />
      <Route exact path="/" component={SplashContainer} />
      <Redirect to="/" />
    </Switch >
    </div>
);

export default App;