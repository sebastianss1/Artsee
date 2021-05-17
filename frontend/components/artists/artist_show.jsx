import React from 'react';

class ArtistShow extends React.Component {
    // constructor(props) {
    //     super(props)
    // }


    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.artistId);
    }


    render() {
        const { artist } = this.props
        return (
            <div className="artwork-show-container">
                <h1> Featured Artists </h1>
                <div>
                    {/* {this.props.artist.map(artist => { */}
                        {/* return ( */}
                            <div>
                                <h2 className="artist-show-subheader">{artist.name}</h2>
                                <ul>
                                    Birth Year: <br /> {artist.birth_year}<br /><br />
                                    Death Year: {artist.death_year}<br /><br />
                                    Bio:
                                    <br /> {artist.bio}
                                    <br /><br />
                                    Gallery: <br /> {artist.gallery.name}
                                </ul>

                            </div>

                        )
                </div>
            </div>


        );

    }
};


export default ArtistShow;