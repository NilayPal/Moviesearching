import React from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom';

const Movie = () => {

  const {movie} = useGlobalContext();
  return (

  <section className='movie-page'>
    <div className='container grid grid-4-col'>
    {movie.map((curMovie)=>{
      const {imdbID, Title, Poster}=  curMovie;
      const movieName= Title.substring(0,15);
      return <NavLink to={`movie/${imdbID}`} key={imdbID}>
        <div className='card'>
          <div className='card-info'>
            <h2>{movieName.length >= 15 ? `${movieName}...`: movieName}</h2>
            <img src={Poster} alt='image' />
          </div>
        </div>

      </NavLink>


    })}
    </div>
    </section>
  )
}

export default Movie
