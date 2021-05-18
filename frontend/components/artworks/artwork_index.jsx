import React from 'react';
import { Route, Switch, Link, Redirect, HashRouter } from 'react-router-dom';
import ArtworkShow from './artwork_show'


class ArtworkIndex extends React.Component {



    componentDidMount() {
        this.props.fetchArtworks()
        window.scroll(0,0)
        // this.props.fetchArtwork(this.props.match.params.artworkId)
    }


    render() {
        const { artwork } = this.props;
            return (
                <div className="featured-artworks-title">
                    <h1> Collect art and design online </h1>
                    <div className="artwork-index-container">
                            {this.props.artworks.map(artwork => {
                                return (
                                    <div className="individual-artwork-box">
                                        <img className="artwork-index-item" src={artwork.photoUrl} /> <br/>
                                        <ul className="artwork-index-text">
                                            <Link to={`/artworks/${artwork.id}`} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>{artwork.artist.name} </Link><br/>
                                        {artwork.title}, {artwork.year}<br/>
                                        {artwork.artist.gallery.name}<br />
                                        {artwork.price}<br />
                                        </ul>
                                    </div>

                                )


                            })}
                        </div>
                    </div>


            );
        
            }
        };


export default ArtworkIndex;