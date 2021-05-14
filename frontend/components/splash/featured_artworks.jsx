import React from 'react';
import FeaturedArtworkItem from './featured_artwork_item'




class FeaturedArtworks extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchArtworks(this.props.title)
    }

    render() {
        const { artworks } = this.props;

        return (
                <div className="splash-home">
                    <div className="splash-artwork">
                        {artworks.map(artwork => {
                            return (
                                <FeaturedArtworkItem
                                    key={artwork.id}
                                    artwork={artwork}
                                    title={this.props.title}
                                    openModal={this.props.openModal} />
                            )
                        })}
                    </div>
                </div>
        );
    }
}

export default FeaturedArtworks;