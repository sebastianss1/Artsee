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
                        <button className="follow-button" onClick={() => this.props.followArtist(artwork.artist.id)}>
                            Follow</button><br/> <br />
                                            {artwork.title}, {artwork.year}<br />
                                        {artwork.description}<br />
                                        {artwork.height_dimensions} x {artwork.width_dimensions}<br />
                                        {artwork.price}<br /><br /><br /><br />
                                        {artwork.artist.gallery.name}<br />
                                        <button>Contact Gallery</button>
                                </ul>
                            </div>

                <div className="title-above-artwork-show-box">
                    About the Work
                </div>
                <div className="box-under-artwork-show">

                    Category: {artwork.medium.name}<br />
                    Condition: {artwork.condition}


                </div>

            </div>

        );
     }
    }
};


export default ArtworkShow;