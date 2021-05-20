import React from 'react';

class GalleryIndex extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.fetchGalleries();
        // window.scrollTo(0, 0);

    }


    render() {
        if (!this.props.galleries) {
            return null
        } else {
            const { galleries } = this.props;
            return (
            <div className="featured-galleries-title ">
                <h1> Featured Galleries </h1>
            <div className="artist-index-container">
            <div className="artist-index-scroll">
                        {this.props.galleries.map(gallery => {
                            return (
                            <div>
                                <h2 className="artist-show-subheader">{gallery.name}</h2>
                                <ul className="ul-artist-scroll">
                                    <li className="li-artist-scroll">
                                        <img className="artist-index-item" src={gallery.photoUrl} /> <br />
                                        <div className="text">{gallery.location}</div> <br/><br/>
                                        <div className="text">{gallery.about}
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