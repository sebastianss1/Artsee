import React from 'react';

class GalleryIndex extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.fetchGalleries();

    }


    render() {
        if (!this.props.galleries) {
            return null
        } else {
            const { galleries } = this.props;
            return (
            <div className="featured-galleries-box">
                <div className="featured-galleries-title"> Featured Galleries </div>
            <div className="artist-index-container">
            <div className="artist-index-scroll">
                        {this.props.galleries.map(gallery => {
                            return (
                            <div>
                                <ul className="ul-artist-scroll">
                                    <li className="li-artist-scroll">
                                        <img className="artist-index-item" src={gallery.photoUrl} /> <br />
                                <div className="gallery-show-subheader">{gallery.name}</div>
                                        <div className="gallery-index-subtext">{gallery.location}</div> <br/><br/>
                                        <div className="gallery-index-subtext">{gallery.about}
                                        </div>
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
}
};


export default GalleryIndex;