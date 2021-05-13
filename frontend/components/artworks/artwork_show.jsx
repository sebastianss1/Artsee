import React from 'react';

class ArtworkShow extends React.Component {



    componentDidMount() {
        this.props.fetchArtwork(this.props.match.params.artworkId)
        window.scrollTo(0, 0);
    }


    render() {
        const { artwork } = this.props;
        debugger
            return (
                <div className="artwork-show">

                    <div className="artwork-show-image">
                        {/* image goes here /> */}
                    </div>
                    <div className="artwork-show-text">
                        <div>
                            <div className="artwork-show-title">{this.props.title}</div>
                            <div className="artwork-show-description">{this.props.description}</div>
                            <br />
                            <br />
                        </div>
                    </div>


                </div>
            );
        }

}

export default ArtworkShow;