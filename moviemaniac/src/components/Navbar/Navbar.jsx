import React from 'react'

import "./navbar.css"
import DarkMode  from "../DarkMode/DarkMode"
import Fire from '../../assets/fire.png'
import Star from '../../assets/star.png'
import Party from '../../assets/party.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>Movie Maniac</h1>

        <div className="navbar_links">
          <DarkMode />
            <a href='#popular'>Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" /></a>
            <a href='#top_rated'>Top Rated <img src={Star} alt="star emoji" className="navbar_emoji" /></a>
            <a href='upcoming'>Upcoming <img src={Party} alt="party emoji" className="navbar_emoji" /></a>
        </div>
    </nav>

  )
}

export default Navbar