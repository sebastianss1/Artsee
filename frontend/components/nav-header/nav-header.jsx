import React from 'react'
import SearchContainer from './search/search_container'
import { Link } from 'react-router-dom'
import WelcomeContainer from './welcome/welcome_container'
import Subheader from './subheader/subheader'

class NavHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="main-header">
                <div className="top-header">
                    <Link to="/"><img className="header-logo" src={window.header_logo} /></Link>
                    <SearchContainer />
                    <div className="header-text">
                        <Link to="/artworks" className="buy-button" style={{ textDecoration: 'none' }}>Buy</Link>
                        <p className="sell-button">Sell</p>
                    </div>

                    <WelcomeContainer />
            </div>

                <div className="subheader">
                    <Subheader />
                </div>
            </nav>

        )
    }
}

export default NavHeader;