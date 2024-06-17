import React, { useState, useEffect } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`;

const useFetch = (apiParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setMovie(data);
        setIsError(false);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(`${API_URL}&${apiParams}`);
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [apiParams]);

  return { isLoading, isError, movie };
};

export default useFetch;
