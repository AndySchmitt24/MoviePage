import { useState, useEffect } from "react";
import axios from "axios";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    console.log("This callback will be called on mount");
    axios
      .get(
        "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/"
      )
      .then(({ data }) => {
        console.log(data);
        setMovies(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("finally");
      });
  }, []);

  console.log("movies " + movies);
  return (
    <div>
      <p>Movies</p>
      {movies.map((movie) => {
        console.log(movie);
      })}
    </div>
  );
}
