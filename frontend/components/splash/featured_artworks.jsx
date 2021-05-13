import React from 'react';
import { Link } from 'react-router-dom';




class FeaturedArtworks extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArtworks(this.props.title)
    }

    render() {
        const { artworks } = this.props;

        return (
            <div>
                <div className="feature-home">
                    <div className="feature-text">
                        <h1 className="shop-featured-artwork">VIEW ALL ARTWORKS</h1>
                    </div>

                </div>
                <div className="splash-home">
                    <div className="splash-artwork">
                        {artworks.map(artwork => {
                            return (
                                <FeaturedImageItem
                                    key={artwork.id}
                                    artwork={artwork}
                                    title={this.props.title}
                                    openModal={this.props.openModal} />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedArtworks;