import React from 'react'
import FeaturedArtworksContainer from './featured_artworks_container'

class SplashBody extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
        <div className="splash-body-container">
         <div className="title-popular-artists">
                <h2>Works by Popular Artists</h2>
                </div>
                <div className="popular-artists">
                    <ul className="popular-artist-names">
            Rashid Johnson
                        <div>Cindy Sherman</div>
                        <div>Robert Longo</div>
                        <div>James Turrell</div>
                        <div>Donald Judd</div>
                        <div>Judy Chicago</div>
                    </ul>
                </div>

                <br /><br /><br />
                <div className="title-artists-to-follow">
                    <h2>Artists to Follow</h2>
                </div>
                <div>
                    <ul className="artists-to-follow-names">
                        <div>Lucia Hierro</div>
                        <div>Sadie Barnette</div>
                        <div>Mark Yang</div>
                        <div>Katie Stout</div>
                        <div>The Haas Brothers</div>
                        <div>Willam Brickel</div>
                    </ul>
                </div>

            <div className="feat-container">
                    <FeaturedArtworksContainer />
            </div>

            <div className="title-featured-galleries">
                <h2> Featured Galleries</h2>
            </div>
            <div >
                 <ul className="featured-galleries-names">
                    <div>Charlie James Gallery</div>
                    <div>R and Comapny</div>
                    <div>Hauser and Wirth</div>
                    <div>David Zwirner</div>
                </ul>
            </div>
            </div>
        )
    }
}

export default SplashBody;