import React from 'react'

import "../MovieCard/movieCard.css"
import Star from "../../assets/star.png"

const MovieCard = () => {
  return (
    <a href='' className='movie_card'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKrcN1iaHtKbmPuPRU0y7WR9OeuqrQGFfqg&s" alt="movie poster" className='movie_poster'/>
   
    <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className='movie_date_rate'>
            <p>10-12-2020</p>
            <p>8.0 <img src={Star} alt="rating icon" className='card_emoji'/></p>
        </div>
        <p className='movie_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id reprehenderit praesentium nostrum voluptates delectus.</p>
    </div>
    </a> 
  )
}

export default MovieCard