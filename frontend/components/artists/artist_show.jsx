import React from 'react';
import {Link} from 'react-router-dom'

class ArtistShow extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.artistId);
        window.scroll(0,0);
    }


    render() {
        if (!this.props.artist) {
            return null
        } else {
            debugger
            const { artist } = this.props
            // const artworks = this.props.artworks
            return (
                <div className="artist-show-container">
                <div className="artist-show-box">
                        <div className="title-artist-box">
                            <div className="inner-artist-box"> 
                                <div className="artist-box-subheader">{artist.name}</div> <br /> <br />
                                <div className="artist-description-box">
                                {/* <dl className="artist-div-list"> */}
                                    <div className="artist-birth-year">b.{artist.birthYear}
                                    {artist.deathYear}</div>
                                    <div className="artist-bio-show">
                                    {artist.bio} </div>
                                {
                                window.currentUser && this.props.theBoolean ?
                                <button 
                                    className="follow-show-artist" 
                                    value="Unfollow" 
                                    onClick={() => this.props.unfollowArtist(this.props.artist.id)}>
                                    - Unfollow</button> :
                                <button 
                                    className="follow-show-artist" 
                                    value="Follow" 
                                    onClick={() => this.props.followArtist(this.props.artist.id)}>
                                    + Follow</button> 
                                }
                                    {/* </dl> */}
                                </div>
                                <div>
                                <h2 className="artist-notable-works">Notable Works</h2><br /></div>

                                {this.props.artworks.map(artwork => {
                                    return (
                                    <div className="artist-artwork-show-box">
                                    <div className="artist-artwork-show-container">
                                        <ul className="artist-artwork-show-container">
                                            <Link to={`/artworks/${artwork.id}`} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>
                                        <img className='artist-show-image' src={artwork.photoUrl} />
                                        <ul className="artwork-index-text">
                                           {artist && artist.name}<br/>
                                            {artwork.title}, {artwork.year}<br/>
                                            {artwork.price}<br />
                                        </ul>
                                        </Link>
                                        </ul>
                                    </div>
                                    </div>
                                    )
                                })}
                                {/* <div>

                                    <Link to={'/artworks/1'} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>
                                     <img className="artist-show-image" src={artist.photoUrl} />                                 <ul className="splash-index-text">
                                        {artist.name}<br />
                                        </ul><br /> </Link>
                                </div> */}

                              </div>
                            </div>
                        </div>
                        </div>
            );
        }
    }   
};


export default ArtistShow;