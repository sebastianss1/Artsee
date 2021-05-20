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
            debugger
            return null
        } else {
            debugger
            const { artist } = this.props;
            return (
                <div className="artist-show-container">
                <div className="artist-show-box">
                        <div className="title-artist-box">
                            <div className="inner-artist-box"> 
                                <h2 className="artist-box-subheader">{this.props.artist.name}</h2> <br />
                                <div className="artist-description-box">
                                <dl className="artist-div-list">
                                    <div className="artist-birth-year">b.{this.props.artist.birth_year}
                                    d.{artist.death_year}</div>
                                    <div className="artist-bio-show">
                                    {this.props.artist.bio} </div>
                                    <div className="artist-gallery-show">Gallery Representation: <br /> {this.props.gallery.name} </div>
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
                                </dl>
                                </div>
                            </div>
                        </div>
                </div>

                {/* <div className="artist-lower-box">
                  <div className="artist-artwork-container">
                    <div className="artist-column-box">
                    <div className="artist-lower-title">
                        <h2 className="artist-notable-works">Notable Works</h2><br />
                    <div className="artist-artwork-carousel-box">
                    <div className="artist-artwork-box">


                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div> */}


                </div>


            );
        }
    }   
};


export default ArtistShow;