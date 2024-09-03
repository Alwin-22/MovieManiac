import React from 'react'

import "./Navbar.css"
import Fire from '../../assets/fire.png'
import Star from '../../assets/star.png'
import Party from '../../assets/party.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>Movie Maniac</h1>

        <div className="navbar_links">
            <a href=''>Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" /></a>
            <a href=''>Top Rated <img src={Star} alt="fire emoji" className="navbar_emoji" /></a>
            <a href=''>Upcoming <img src={Party} alt="fire emoji" className="navbar_emoji" /></a>
        </div>
    </nav>

  )
}

export default Navbar