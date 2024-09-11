import React, { useEffect, useState } from 'react'

import "./movieList.css";
import Fire from "../../assets/fire.png"
import MovieCard from '../MovieCard/movieCard';
import FilterGroup from './FilterGroup';

const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [filterMovies, setFilterMovies] = useState([])
    const [minRating, setMinRating] = useState(0)

    useEffect(()=> {
        fetchMovies()
    },[])
    const fetchMovies = async () => {
        const response = await fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=20a4f28fcd120c0e0d5cff934bccf5fc"
        )
        const data = await response.json();
        setMovies(data.results)
        setFilterMovies(data.results)
        
    } 
    const handleFilter = rate => {
        if(rate === minRating){
            setMinRating(0)
            setFilterMovies(movies)
        }else{
            setMinRating(rate);
    
            const filtered = movies.filter((movie)=>movie.vote_average>= rate)
            setFilterMovies(filtered)

        }
    }

  return (
    <section className='movie_List'>
        <header className='align_center movie_list_header'>
            <h2 className='align_center movie_list_heading'>Popular <img src={Fire} alt="fire emoji" className='navbar_emoji'/></h2>

            <div className='align_center movie_list-fs'>
            <FilterGroup minRating={minRating} onRatingClick = {handleFilter} ratings={[8,7,6]}/>
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
                filterMovies.map(movie => <MovieCard key={movie.id} movie ={movie}/>)
            }        
        </div>
    </section>
  )
}

export default MovieList