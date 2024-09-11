import React, { useEffect, useState } from 'react'

import "./movieList.css";
import Fire from "../../assets/fire.png"
import MovieCard from '../MovieCard/movieCard';

const MovieList = () => {
    const [movies, setMovies] = useState([])
    useEffect(()=> {
        fetchMovies()
    },[])
    const fetchMovies = async () => {
        const response = await fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=20a4f28fcd120c0e0d5cff934bccf5fc"
        )
        const data = await response.json();
        setMovies(data.results)
        
    } 
  return (
    <section className='movie_List'>
        <header className='align_center movie_list_header'>
            <h2 className='align_center movie_list_heading'>Popular <img src={Fire} alt="fire emoji" className='navbar_emoji'/></h2>

            <div className='align_center movie_list-fs'>
            <ul className="align_center movie_filter">
                <li className="movie_filter_item active">8+ Star</li>
                <li className="movie_filter_item">7+ Star</li>
                <li className="movie_filter_item">6+ Star</li>
            </ul>
            <select name="" id="" className="movie_sorting">
                <option value="">Sort By</option>
                <option value="">Date</option>
                <option value="">Rating</option>
            </select>

            <select name="" id="" className="movie_sorting">
                <option value="">Ascending</option>
                <option value="">Descending</option>
            </select>
            </div>    
        </header>

        <div className="movie_cards">
            {
                movies.map(movie => <MovieCard key={movie.id} movie ={movie}/>)
            }        
        </div>
    </section>
  )
}

export default MovieList