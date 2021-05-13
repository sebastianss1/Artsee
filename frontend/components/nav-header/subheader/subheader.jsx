import React from 'react';
import { Link } from 'react-router-dom';

const Subheader = () => {

    return(
        <div className="subheader-text">
            <ul className="artists-subheader">
                <Link to="/artists" className="artists-subheader" style={{ textDecoration: 'none' }}> Artists </Link>
                <Link to="/artworks" className="artworks-subheader" style={{ textDecoration: 'none' }}>Artworks</Link>
                <Link to="/galleries" className="galleries-subheader" style={{ textDecoration: 'none'}} >Galleries</Link>

            </ul>
        </div>

    )

};


export default Subheader;
