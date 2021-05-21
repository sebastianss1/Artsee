import React from 'react';
import { Link } from 'react-router-dom'

class ArtworkShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchArtwork(this.props.match.params.artworkId);
        window.scroll(0,0)
    }


    render() {
        if (!this.props.artwork) {
            return null
        } else { 
            const { artwork } = this.props; 
            return (
            <div>
                <div className="artwork-show-container">
                        <img className="artwork-show-item" 
                        src={artwork.photoUrl} 
                        />

                        <ul className="artwork-show-text">
                        <div className="artwork-show-subheader">
                                <Link to={`/artists/${this.props.artist.id}`} style={{ textDecoration: 'none', color: 'black' }}>{this.props.artist.name} </Link>
                        </div>
                            {
                                window.currentUser && this.props.theBoolean ?
                                <button 
                                    className="follow-button" 
                                    value="Unfollow" 
                                    onClick={() => this.props.unfollowArtist(this.props.artist.id)}>
                                    - Unfollow</button> :
                                <button 
                                    className="follow-button" 
                                    value="Follow" 
                                    onClick={() => this.props.followArtist(this.props.artist.id)}>
                                    + Follow</button> 
                                }
                        <br/> <br />
                                <div className="artwork-show-description-text">
                                    <em>{artwork.title}</em>, {artwork.year}<br />
                                        {artwork.description}<br />

                                        {artwork.heightDimensions} x {artwork.widthDimensions}in<br />

                                        {artwork.price}<br /><br /><br /><br />
                                {
                                    window.current_user && this.props.currentUser.likedArtworks.some(artwork.artist) ?
                                        <button
                                            className="like-button"
                                            value="Unfollow"
                                            onClick={() => this.props.unlikeArtwork(artwork.id)}>
                                            - Unlike</button> :
                                        <button
                                            className="like-button"
                                            value="Follow"
                                            onClick={() => this.props.likeArtwork(artwork.id)}>
                                            <img className="like-heart" src={window.like_heart} /></button>
                                }
                                </div>
                                    <div className="button-area">
                                        <button className="signup-submit-form">
                                        Contact Gallery</button><br/> <br/>
                                        {/* {artwork.artist.gallery.name}<br /> */}
                                </div>
                                </ul>
                            </div>

                <div className="title-above-artwork-show-box">
                    About the Work
                </div>
                <div className="box-under-artwork-show">
                    <div className="category-artwork-show">
                    Category: 
                    {/* {{artwork.medium.name} */}
                    </div>
                    <div className="condition-artwork-show">
                    Condition: {artwork.condition} </div>
                </div>

            </div>

        );
     }
    }
};


export default ArtworkShow;