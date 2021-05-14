import React from 'react'
import SplashHeader from './splash_header'
import SplashBody from './splash_body'

class SplashContainer extends React.Component {
    render() {
        return (
            <div>
                <SplashHeader className='splash' />
                <SplashBody className='splash-body' />
            </div>
        )
    }
};

export default SplashContainer;