import React from 'react';
import { popUpModal } from '../../actions/modal_actions'
import FeaturedArtworksContainer from './featured_artworks_container'

class Splash extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
            <div className="hero-container">
                <img className="banner-image" src={window.banner_image} />
                <div className='hero'>
                <div className='titles'>
                    <h1 className='hero-text'>Learn about and collect art from leading galleries, fairs, and museums</h1>
                        <h5 className='hero-text-subhead'>Sign up to get updates on your favorite artists</h5> <br /><br /><br /><br />
                        <button className="banner-signup" onClick={() => popUpModal('signup')}>Sign Up</button>
                </div>
            </div>

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

);

}
}

export default Splash;

{/* <button className="signup-submit" onClick={() => popUpModal('signup')}>Sign Up</button> */}

{/* <div className="">
        <h3>Trending Emerging Artists</h3>
        <p>This week, Artsy’s Curatorial team has kept our fingers on the pulse, taking note of the most popular artists currently on the scene. 
            <br />From innovative sculptors to experimental photographers, here’s a chance to explore the trailblazing artists turning heads in the art world.</p>
</div> */}