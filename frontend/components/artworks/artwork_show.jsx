import React from 'react';

class ArtworkShow extends React.Component {
    constructor(props) {
        super(props)
    }



    // componentDidMount() {
    //     this.props.fetchArtwork(this.props.match.params.artworkId)
    // }


    render() {
        const { artwork } = this.props; 
        if (!this.props.artwork) {
            return null
        } else { 
        return (
            
            <div className="artwork-show-container">
                {/* <h1> Featured Artworks </h1> */}
                <div>
                            <div className="artist-index-container">
                                <h2 className="artist-show-subheader">{artwork.title}</h2>
                                <ul>
                                    Artist Name: {artwork.artist.name}<br />
                                        Year: {artwork.year}<br />
                                        Description: {artwork.description}<br />
                                        Dimensions: {artwork.height_dimensions} x {artwork.width_dimensions}<br />
                                        Medium: {artwork.medium.name}<br />
                                        Availability: {artwork.availability}<br />
                                        Price: {artwork.price}<br />
                                </ul>
                            </div>
                </div>
            </div>

        );
     }
    }
};


export default ArtworkShow;