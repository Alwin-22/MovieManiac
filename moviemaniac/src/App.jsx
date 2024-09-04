import React from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import MovieList from "./components/MovieList/movieList"
const App = () => {
  return (
    <div className = 'app'>
      <Navbar/>
      <main>
        <MovieList />
      </main>
    </div>
  )
}

export default App