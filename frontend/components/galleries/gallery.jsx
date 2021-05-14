import React from 'react';

class Gallery extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.fetchGalleries();
        // window.scrollTo(0, 0);

    }


    render() {
        // const { galleries } = this.props;
        return (
            <div className="artwork-show-container">
                <h1> Featured Galleries </h1>
                    <div>
                        {this.props.galleries.map(gallery => {
                            return (
                            <div>
                                <h2 className="artist-show-subheader">{gallery.name}</h2>
                                    <ul> 
                                        {gallery.location} <br/><br/>
                                        {gallery.about}
                                    </ul>
                            </div>
                            )

                        })}
                    </div>
                </div>

        );

    }
};


export default Gallery;