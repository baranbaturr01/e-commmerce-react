import React from 'react'
import Announcement from '../componenets/Announcement'
import Navbar from '../componenets/Navbar'
import Slider from '../componenets/Slider'

const Home = () => {
    return (
        <div>
            <Announcement/>
           <Navbar></Navbar>
           <Slider></Slider>
        </div>
    )
}

export default Home
