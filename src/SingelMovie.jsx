import React from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  console.log("Movie ID:", id);

  const { isLoading, movie, isError } = useFetch(`&i=${id}`);

  console.log("Loading:", isLoading);
  console.log("Movie Data:", movie);
  console.log("Error:", isError);

  if (isLoading) {
    return (
      <section className="movie-section">
        <div className="loading">Loading....</div>
      </section>
    );
  }

  if (isError || !movie) {
    return (
      <section className="movie-section">
        <div className="error">Error loading movie data...</div>
      </section>
    );
  }

  return (
   
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt={movie.Title} />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
  
  );
};

export default SingleMovie;
