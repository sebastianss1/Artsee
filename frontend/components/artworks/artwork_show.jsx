import React from 'react';

class ArtworkShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.fetchArtwork(this.props.match.params.artworkId);
        window.scroll(0,0)
    }


    render() {
        if (!this.props.artwork) {
            return null
        } else { 
            debugger
            const { artwork } = this.props; 
            return (
            <div>
                <div className="artwork-show-container">
                        <img className="artwork-show-item" src={artwork.photoUrl} />
                            <ul className="artwork-show-text">
                        <div className="artwork-show-subheader">{artwork.artist.name}</div>
                            {window.current_user && this.props.currentUser.followedArtists.includes(artwork.artist) ?
                                <button className="follow-button" onClick={() => this.props.unfollowArtist(artwork.artist.id)} content="Unfollow">- Unfollow</button> :
                                <button className="follow-button" onClick={() => this.props.followArtist(artwork.artist.id)} content="Follow">+ Follow</button> 
                            }
                        <br/> <br />
                                        {artwork.title}, {artwork.year}<br />
                                        {artwork.description}<br />
                                        {artwork.height_dimensions} x {artwork.width_dimensions}<br />
                                        {artwork.price}<br /><br /><br /><br />
                                        <button className="signup-submit-form">Contact Gallery</button><br/> <br/>
                                        {artwork.artist.gallery.name}<br />
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