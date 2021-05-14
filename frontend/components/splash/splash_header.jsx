import React from 'react';
import { popUpModal } from '../../actions/modal_actions'
// import FeaturedArtworksContainer from './featured_artworks_container'

class SplashHeader extends React.Component {
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
            </div>

);

}
}

export default SplashHeader;

{/* <button className="signup-submit" onClick={() => popUpModal('signup')}>Sign Up</button> */}

