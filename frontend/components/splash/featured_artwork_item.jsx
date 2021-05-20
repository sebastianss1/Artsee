import React from 'react';
import { Link } from 'react-router-dom';


class FeaturedArtworkItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { artwork } = this.props
        return (
            <div className="splash-artwork-index">

                <div className="splash-artwork-image">
                    <img src={this.props.artwork.imgUrl} />
                </div>
                <div className="artwork-index-info">

                    <div className="artwork-index-title">
                        <Link to={`/artworks/${artwork.id}`}>{artwork.title}</Link>
                        <div className="artwork-index-description">
                            {artwork.description}
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default FeaturedArtworkItem;