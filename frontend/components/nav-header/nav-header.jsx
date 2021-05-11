import React from 'react'
import SearchContainer from './search_container'
import { Link } from 'react-router-dom'
import WelcomeContainer from '../welcome/welcome_container'

class NavHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <SearchContainer />
                <WelcomeContainer />
            </div>

        )
    }
}

export default NavHeader;