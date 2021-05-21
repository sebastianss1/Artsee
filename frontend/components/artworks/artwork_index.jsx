import React from 'react';
import { Route, Switch, Link, Redirect, HashRouter } from 'react-router-dom';
import ArtworkShow from './artwork_show'


class ArtworkIndex extends React.Component {



    componentDidMount() {
        this.props.fetchArtworks()
        window.scroll(0,0)
    }


    render() {
        if (!this.props.artworks) {
            return null
        } else { 
        const { artworks } = this.props;
            return (
                <div className="featured-artworks-title">
                    <div className="featured-artworks-text"> Collect art and design online </div>
                    <div className="artwork-index-container">
                            {this.props.artworks.map(artwork => {

                                const artist = this.props.artists[artwork.artistId]
                                const gallery = this.props.galleries[artist.galleryId]

                                return (
                                    <div className="individual-artwork-box">
                                        <Link to={`/artworks/${artwork.id}`} className="artwork-link-to-show" style={{ textDecoration: 'none' }}><img className="artwork-index-item" src={artwork.photoUrl} /></Link>
                                        <ul className="artwork-index-text">
                                            <Link to={`/artworks/${artwork.id}`} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>{artist && artist.name} </Link><br/>
                                        {artwork.title}, {artwork.year}<br/>
                                        {gallery && this.props.galleries[artist.galleryId].name}<br />
                                        {artwork.price}<br />
                                        </ul>
                                    </div>

                                )


                            })}
                        </div>
                    </div>


            );
        }
    }
};


export default ArtworkIndex;