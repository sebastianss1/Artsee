import React from 'react';
import {Link} from 'react-router-dom'

class ArtistShow extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.artistId);
        window.scroll(0,0);
    }


    render() {

        if (!this.props.artist) {
            return null
        } else {
            const { artist } = this.props;
            return (
                <div className="artist-show-container">
                <div className="artist-show-box">
                        <div className="title-artist-box">
                            <div className="inner-artist-box"> 
                                <h2 className="artist-box-subheader">{artist.name}</h2> <br />
                                <div className="artist-description-box">
                                <dl className="artist-div-list">
                                    <div className="artist-birth-year">b.{artist.birth_year}
                                    d.{artist.death_year}</div>
                                    <div className="artist-bio-show">
                                    {artist.bio} </div>
                                    <div className="artist-gallery-show">Gallery Representation: <br /> {artist.gallery.name} </div>
                                </dl>
                                </div>
                            </div>
                        </div>
                </div>


                <div className="artist-lower-box">
                  <div className="artist-artwork-container">
                    <div className="artist-column-box">
                    <div className="artist-lower-title">
                        <h2 className="artist-notable-works">Notable Works</h2><br />
                    <div className="artist-artwork-carousel-box">
                    <div className="artist-artwork-box">
                        {this.props.artist.artworks.map(artwork => {
                            return(
                                <div>
                                <ul className="ul-artist-page-scroll">
                                    <li className="li-artist-page-scroll">
                                        <img className="artist-show-artwork" src={artwork.photoUrl} /> <br/>
                                        <Link to={`/artworks/${artwork.id}`} className="artwork-link-to-show" style={{ textDecoration: 'none' }}> {artwork.title} </Link>
                                    </li>
                                </ul>

                            </div>
                            )
                        })}

                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>


                </div>


            );
        }
    }   
};


export default ArtistShow;