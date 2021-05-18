import React from 'react';

class ArtistIndex extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.fetchArtists();
    }


    render() {
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
                                        <h2 className="artist-show-subheader">{artist.name}</h2>
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