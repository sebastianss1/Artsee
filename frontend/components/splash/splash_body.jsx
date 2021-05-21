import React from 'react'
import { Link } from 'react-router-dom'

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
                        Works by Popular Artists
                </div>
                <div className="splash-index-container">
                 <div className="splash-index-scroll">

                    <ul className="ul-splash-scroll">
                        <li className="li-splash-scroll">
                        <Link to={'/artworks/1'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}><img className="splash-artist-images" src={window.rashidJohnson} />
                                <ul className="splash-index-text">
                                    Rashid Johnson<br />
                                    Untitled Anxious Red Drawing, 2020<br />
                                    Hauser Wirth<br />
                                    $200,000<br />
                                </ul>
                                </Link>
                            </li>

                        <li className="li-splash-scroll">
                        <Link to={'/artworks/3'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>
                        <img className="splash-artist-images" src={window.cindySherman} /> 
                                <ul className="splash-index-text">
                                    Cindy Sherman<br />
                                    Untitled Film Still #21, 1977<br />
                                    Metro Pictures<br />
                                    Sold<br />
                                </ul>
                            </Link>
                        </li>

                        <li className="li-splash-scroll">
                        <Link to={'/artworks/6'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>
                         <img className="splash-artist-images" src={window.robertLongo} />
                            <ul className="splash-index-text">
                                Robert Longo<br />
                                Untitled (Cindy), from the Series 'Men in the Cities', 1981<br />
                                Metro Pictures<br />
                                Sold<br />
                            </ul>
                            </Link>
                        </li>

                        <li className="li-splash-scroll">
                        <Link to={'/artworks/8'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}><img className="splash-artist-images" src={window.jamesTurrell} />
                            <ul className="splash-index-text">
                                James Turrell<br />
                                Raethro Green, 1968<br />
                                Pace Gallery<br />
                                Sold<br />
                            </ul>
                        </Link>
                        </li>

                        <li className="li-splash-scroll">
                            <Link to={'/artworks/9'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>
                         <img className="splash-artist-images" src={window.donaldJudd} /> 
                            <ul className="splash-index-text">
                                Donald Judd<br />
                                Untitled (1967), 1967<br />
                                David Zwirner<br />
                                Not for Sale<br />
                            </ul>
                            </Link>
                        </li>
                            
                        <li className="li-splash-scroll">
                        <Link to={'/artworks/12'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>
                         <img className="splash-artist-images" src={window.judyChicago} /> 
                             <ul className="splash-index-text">
                                Judy Chicago<br />
                                The Dinner Party, 1974<br />
                                Salon 94<br />
                                Not for Sale<br />
                            </ul>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            </div>
            </div>
            <br/> <br/> <br/> 

            <div className="main-splash-body">
                <div className="popular-artists">
                    <div className="popular-inner">
                        <div className="popular-header">
                        Explore Galleries
                </div>
                <div className="splash-index-container">
                 <div className="splash-index-scroll">

                    <ul className="ul-splash-scroll">
                        <li className="li-splash-scroll">
                        <Link to={'/galleries'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}><img className="splash-artist-images" src={window.hauserWirth} />
                                <ul className="artwork-index-text">
                                    Hauser Wirth<br />
                                    New York, London, Los Angeles<br />
                                </ul>
                                </Link>
                            </li>

                        <li className="li-splash-scroll">
                        <Link to={'/galleries'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>
                        <img className="splash-artist-images" src={window.metroPictures} /> 
                                <ul className="splash-index-text">
                                    Metro Pictures<br />
                                    New York<br />
                                </ul>
                            </Link>
                        </li>

                        <li className="li-splash-scroll">
                        <Link to={'/galleries'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}><img className="splash-artist-images" src={window.paceGallery} />
                            <ul className="splash-index-text">
                                Pace Gallery<br />
                                New York, London<br />
                            </ul>
                        </Link>
                        </li>

                        <li className="li-splash-scroll">
                            <Link to={'/galleries'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>
                         <img className="splash-artist-images" src={window.davidZwirner} /> 
                            <ul className="splash-index-text">
                                David Zwirner<br />
                                New York, Paris<br />
                            </ul>
                            </Link>
                        </li>
                            
                        <li className="li-splash-scroll">
                        <Link to={'/galleries'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>
                         <img className="splash-artist-images" src={window.salon94} /> 
                             <ul className="splash-index-text">
                                Salon 94<br />
                                New York<br />
                            </ul>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default SplashBody;