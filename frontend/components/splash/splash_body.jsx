import React from 'react'
import { fetchArtworks } from '../../util/artwork_api_util';
// import FeaturedArtworks from './featured_artworks'
// import FeaturedArtworksContainer from './featured_artworks_container'

class SplashBody extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
    debugger
        return (
        <div className="splash-body-container">
            <div className="main-splash-body">
                <div className="popular-artists">
                    <div className="popular-inner">
                        <div className="popular-header">
                        <div><h2>Works by Popular Artists</h2></div>
                </div>
                <div className="popular-artists">
                    <ul className="popular-artist-names">
                        <div> <img className="splash-artist-images" src={window.rashidJohnson} /> </div>
                            <div>Rashid Johnson </div>

                        <div><img className="splash-artist-images" src={window.cindySherman} /> </div>
                            <div>Cindy Sherman</div>

                        <div> <img className="splash-artist-images" src={window.robertLongo} /> </div>
                            <div>Robert Longo</div>

                        <div><img className="splash-artist-images" src={window.jamesTurrell} /></div>
                            <div>James Turrell</div>

                        <div> <img className="splash-artist-images" src={window.donaldJudd} /> </div>
                            <div>Donald Judd</div>
                            
                        <div> <img className="splash-artist-images" src={window.judyChicago} /> </div>
                            <div>Judy Chicago</div>
                    </ul>
                </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default SplashBody;