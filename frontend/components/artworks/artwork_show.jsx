import React from 'react';

class ArtworkShow extends React.Component {
    constructor(props) {
        super(props)
    }


    



    componentDidMount() {
        window.scroll(0,0)
    }

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

                    <div className="category-artwork-show">Category: {artwork.medium.name}</div><br /> <br />
                    <div className="condition-artwork-show">Condition: {artwork.condition} </div>


                </div>

            </div>

        );
     }
    }
};


export default ArtworkShow;