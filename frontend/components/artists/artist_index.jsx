import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndex extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.fetchArtists();
    }


    render() {
        const { artist } = this.props;
        return (
            <div className="featured-artists-title">
                <h1> Featured Artists </h1>
                    <div className="artist-index-container">
                        <div className="artist-index-scroll">
                        {this.props.artists.map(artist => {
                            return (
                            <div>
                                <ul className="ul-artist-scroll">
                                    <li className="li-artist-scroll">
                                        <img className="artist-index-item" src={artist.photoUrl} /> <br/>
                                        <Link to={`/artists/${artist.id}`} className="artwork-link-to-show" style={{ textDecoration: 'none' }}>{artist.name} </Link>
                                    </li>
                                </ul>

                            </div>
                                
                            )

                        })}
            </div>
            </div>
            </div>


        );

    }
};


export default ArtistIndex;