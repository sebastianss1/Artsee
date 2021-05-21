import React from 'react';
// import FeaturedArtworksContainer from './featured_artworks_container'

class SplashHeader extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        debugger
        return (
            <div className="home-hero">
            <div className="banner-image"><img src={window.banner_image} />
                <div className='hero-main-container'>
                    <div className="hero-layout-container">
                        <div className="hero-outer">
                            <div className="hero-inner">
                                <div className='hero-titles-inner'>
                                    <h1 className='hero-text'>Learn about and collect art from leading galleries, fairs, and museums</h1>
                                    <h5 className='hero-text-subhead'>Sign up to get updates on your favorite artists</h5>
                                    <button className="banner-signup" onClick={() => this.props.popUpModal('signup')}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
                </div>
            </div>

        );

    };
};


export default SplashHeader;


