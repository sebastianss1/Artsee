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
        debugger 
        if (!this.props.artwork) {
            return null
        } else { 
        return (
            
            <div>
                    <div className="artwork-show-container">
                        <img className="artwork-show-item" src={artwork.photoUrl} />
                            <ul className="artwork-show-text">
                        <h2 className="artwork-show-subheader">{artwork.artist.name}</h2>
                                            {artwork.title}, {artwork.year}<br />
                                        {artwork.description}<br />
                                        {artwork.height_dimensions} x {artwork.width_dimensions}<br />
                                        {artwork.medium.name}<br />
                                        {artwork.price}<br />
                                </ul>
                            </div>
                </div>

        );
     }
    }
};


export default ArtworkShow;