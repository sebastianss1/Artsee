import React from 'react'
import SearchContainer from './search/search_container'
import { Link } from 'react-router-dom'
import WelcomeContainer from './welcome/welcome_container'

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
                    <WelcomeContainer />
            </div>
            </nav>

        )
    }
}

export default NavHeader;