import React from 'react'

import "../MovieCard/movieCard.css"
import Star from "../../assets/star.png"

const MovieCard = ({movie}) => {
  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" className='movie_card'>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
   
    <div className="movie_details">
        <h3 className="movie_details_heading">{movie.original_title}</h3>
        <div className='movie_date_rate'>
            <p>{movie.release_date}</p>
            <p>{movie.vote_average.toFixed(1)} <img src={Star} alt="rating icon" className='card_emoji'/></p>
        </div>
        <p className='movie_description'>{movie.overview.slice(0,100)+ "..."}</p>
    </div>
    </a> 
  )
}

export default MovieCard