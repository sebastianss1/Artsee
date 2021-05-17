import React from 'react';
import { Route, Switch, Link, Redirect, HashRouter } from 'react-router-dom';
import ArtworkShow from './artwork_show'


class ArtworkIndex extends React.Component {



    componentDidMount() {
        this.props.fetchArtworks()
    }


    render() {
        const { artwork } = this.props;
            return (
                <div className="artwork-show-container">
                    <h1> Featured Artworks </h1>
                    <div>
                            {this.props.artworks.map(artwork => {
                                return (
                                    <div className="artist-index-container">
                                        <ArtworkShow key={artwork.id} artwork={artwork} /> 
                                        {/* <h2 className="artist-show-subheader" >{artwork.title} </h2>
                                        <ul> */}
                                        {/* Artist Name: {artwork.artist.name}<br /> */}
                                        {/* Year: {artwork.year}<br/>
                                        Description: {artwork.description}<br />
                                        Dimensions: {artwork.height_dimensions} x {artwork.width_dimensions}<br />
                                        Medium: {artwork.medium.name}<br />
                                        Availability: {artwork.availability}<br />
                                        Price: {artwork.price}<br /> */}
                                        {/* </ul> */}
                                    </div>

                                )


                            })}
                        </div>
                    </div>


            );
        
            }
        };


export default ArtworkIndex;