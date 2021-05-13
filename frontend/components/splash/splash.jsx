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

            <div>
                <h2>Works by Popular Artists</h2>
                    <ul>
                        <li>Rashid Johnson</li>
                        <li>Cindy Sherman</li>
                        <li>Robert Longo</li>
                        <li>Lucia Hierro</li>
                        <li>James Turell</li>
                        <li>Donald Judd</li>
                    </ul>
            </div>

                <div>
                    <h2>Artists to Follow</h2>
                    <ul>
                        <li>Lucia Hierro</li>
                        <li>Sadie Barnette</li>
                        <li>Mark Yang</li>
                        <li>Katie Stout</li>
                        <li>The Haas Brothers</li>
                        <li>William Brickel</li>
                    </ul>
                </div>

            <div className="feat-container">
                    <FeaturedArtworksContainer />
            </div>

            <div className="featured-galleries">
                <h2>Featured Galleries</h2>
                <ul>
                    <li>Charlie James Gallery</li>
                    <li>R and Comapny</li>
                    <li>Hauser and Wirth</li>
                    <li>David Zwirner</li>
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