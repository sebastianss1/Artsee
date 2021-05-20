import React from 'react';

class ArtworkShow extends React.Component {
    constructor(props) {
        super(props)

        // this.handleLike = this.handleLike.bind(this)
    }

    componentDidMount() {
        debugger
        this.props.fetchArtwork(this.props.match.params.artworkId);
        // this.props.fetchArtist(this.props.artist)
        window.scroll(0,0)
    }


    debugger 
    render() {
        if (!this.props.artwork) {
            return null
        } else { 
            debugger
            const { artwork } = this.props; 
            return (
            <div>
                <div className="artwork-show-container">
                        <img className="artwork-show-item" 
                        src={artwork.photoUrl} 
                        />
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
                                    + Like</button> 
                                }
                        <ul className="artwork-show-text">
                        <div className="artwork-show-subheader">
                            {/* {this.props.artist.name} */}
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
                                        {artwork.title}, {artwork.year}<br />
                                        {artwork.description}<br />

                                        {artwork.height_dimensions} x {artwork.width_dimensions}<br />

                                        {artwork.price}<br /><br /><br /><br />

                                        <button className="signup-submit-form">
                                        Contact Gallery</button><br/> <br/>
                                        {/* {artwork.artist.gallery.name}<br /> */}
                                </ul>
                            </div>

                <div className="title-above-artwork-show-box">
                    About the Work
                </div>
                <div className="box-under-artwork-show">
                    <div className="category-artwork-show">
                    Category: 
                    {/* {{artwork.medium.name} */}
                    </div><br /> <br />
                    <div className="condition-artwork-show">
                    Condition: {artwork.condition} </div>
                </div>

            </div>

        );
     }
    debugger 
    }
};


export default ArtworkShow;