import { useState, useEffect } from "react";

const API_URL = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`;

const useFetch = (query) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [isError, setIsError] = useState({ show: false, msg: "" });

  const fetchMovie = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setMovie(data);
        setIsError({ show: false, msg: "" });
      } else {
        setIsError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      setIsError({ show: true, msg: "Something went wrong" });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie(`${API_URL}${query}`);
  }, [query]);

  return { isLoading, movie, isError };
};

export default useFetch;
