import React from 'react'
import { Link } from 'react-router-dom'

class SplashBody extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
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
                            <Link to={'/artworks/1'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}><img className="splash-artist-images" src={window.rashidJohnson} /> </Link>
                                <ul className="splash-index-text">
                                    <Link to={'/artworks/1'} className="artwork-link-to-show" style={{ textDecoration: 'none' }} > Rashid Johnson </Link><br />
                                    Untitled Anxious Red Drawing, 2020<br />
                                    Hauser Wirth<br />
                                    $200,000<br />
                                </ul>
                            </li>

                        <li className="li-splash-scroll">
                        <Link to={'/artworks/3'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>
                        <img className="splash-artist-images" src={window.cindySherman} /> </Link>
                                <ul className="splash-index-text">
                                    <Link to={'/artworks/3'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>Cindy Sherman     </Link><br />
                                    Untitled Film Still #21, 1977<br />
                                    Metro Pictures<br />
                                    Sold<br />
                                </ul>
                        
                        </li>

                        <li className="li-splash-scroll">
                        <Link to={'/artworks/6'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>
                         <img className="splash-artist-images" src={window.robertLongo} /> </Link>
                            <ul className="splash-index-text">
                                <Link to={'/artworks/6'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}> Robert Longo </Link><br />
                                Untitled (Cindy), from the Series 'Men in the Cities', 1981<br />
                                Metro Pictures<br />
                                Sold<br />

                            </ul>
                        </li>

                        <li className="li-splash-scroll">
                        <Link to={'/artworks/8'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}><img className="splash-artist-images" src={window.jamesTurrell} /> </Link>
                            <ul className="splash-index-text">
                                <Link to={'/artworks/8'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}> James Turrell<br /></Link>
                                Raethro Green, 1968<br />
                                Pace Gallery<br />
                                Sold<br />
                            </ul>
                        </li>

                        <li className="li-splash-scroll">
                            <Link to={'/artworks/9'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>
                                <img className="splash-artist-images" src={window.donaldJudd} /> </Link>
                            <ul className="splash-index-text">
                                    <Link to={'/artworks/9'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>Donald Judd</Link><br />
                                Untitled (1967), 1967<br />
                                David Zwirner<br />
                                Not for Sale<br />
                            </ul>
                        </li>
                            
                        <li className="li-splash-scroll">
                        <Link to={'/artworks/12'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>
                         <img className="splash-artist-images" src={window.judyChicago} /> </Link>
                             <ul className="splash-index-text">
                                 <Link to={'/artworks/12'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>Judy Chicago</Link><br />
                                The Dinner Party, 1974<br />
                                Salon 94<br />
                                Not for Sale<br />
                            </ul>
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
                        <Link to={'/galleries'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}><img className="splash-artist-images" src={window.hauserWirth} /></Link>
                                <ul className="artwork-index-text">
                                    <Link to={'/galleries'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>Hauser Wirth</Link><br />
                                    New York, London, Los Angeles<br />
                                </ul>
                            </li>

                        <li className="li-splash-scroll">
                        <Link to={'/galleries'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>
                        <img className="splash-artist-images" src={window.metroPictures} /> </Link>
                                <ul className="splash-index-text">
                                    <Link to={'/galleries'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>Metro Pictures</Link><br />
                                    New York<br />
                                </ul>
                        </li>

                        <li className="li-splash-scroll">
                        <Link to={'/galleries'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}><img className="splash-artist-images" src={window.paceGallery} /></Link>
                            <ul className="splash-index-text">
                                    <Link to={'/galleries'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>Pace Gallery</Link><br />
                                New York, London<br />
                            </ul>
                        </li>

                        <li className="li-splash-scroll">
                            <Link to={'/galleries'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>
                         <img className="splash-artist-images" src={window.davidZwirner} /> </Link>
                            <ul className="splash-index-text">
                                <Link to={'/galleries'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>David Zwirner
                                </Link><br />
                                New York, Paris<br />
                            </ul>
                        </li>
                            
                        <li className="li-splash-scroll">
                        <Link to={'/galleries'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>
                                <img className="splash-artist-images" src={window.salon94} /> </Link>
                             <ul className="splash-index-text"> 
                                <Link to={'/galleries'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}> Salon 94 </Link>
                                <br />
                                New York<br />
                            </ul>
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