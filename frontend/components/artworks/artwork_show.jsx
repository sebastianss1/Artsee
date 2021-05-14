import React from 'react';

class ArtworkShow extends React.Component {



    componentDidMount() {
        this.props.fetchArtworks()
    }


    render() {
        const { artwork } = this.props;
            return (
                <div className="artwork-show">
                        <h1> Featured Artworks </h1>
                    <div className="artwork-show-image">
                        {/* { image goes here /> */}
                    </div>
                    <div className="artist-show">
                        <div>
                            {this.props.artworks.map(artwork => {
                                return (
                                    <div className="artist-index-container">
                                        <h1>{artwork.title}</h1>
                                        <li>Year: {artwork.year}</li>
                                        <li>Artist
                                    {artwork.artist_id}</li>
                                        <li>Description
                                    {artwork.description}</li>
                                        <li>Dimensions: {artwork.height_dimensions} x {artwork.width_dimensions}</li>
                                        <li>Medium: {artwork.medium_id}</li>
                                        <li>Availability: {artwork.availability}</li>
                                        <li>Price: {artwork.price}</li>
                                    </div>

                                )


                            })}
                        </div>
                    </div>
                </div>


            );
        
            }
        };


export default ArtworkShow;