import React from 'react'
import Carousel from './Carousel'

const Header = () => {
    return (
        <div id='header' className="hero min-h-screen bg-[url('/images/banner-bg.jpg')] bg-right-bottom justify-center items-center p-8">
            <Carousel />
        </div>
    )
}

export default Header