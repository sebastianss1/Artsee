import React from 'react';

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
                        <button className="banner-signup"> Sign Up</button>
                </div>
            </div>
            </div>

);

}
}

export default Splash;


{/* <div className="">
        <h3>Trending Emerging Artists</h3>
        <p>This week, Artsy’s Curatorial team has kept our fingers on the pulse, taking note of the most popular artists currently on the scene. 
            <br />From innovative sculptors to experimental photographers, here’s a chance to explore the trailblazing artists turning heads in the art world.</p>
</div> */}