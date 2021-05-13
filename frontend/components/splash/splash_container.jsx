import React, { Component } from 'react'
import Splash from './splash'
// import { Link } from 'react-router-dom'

class SplashContainer extends Component {
    render() {
        return (
            <div>
                <Splash className='splash' />
            </div>
        )
    }
};

export default SplashContainer;