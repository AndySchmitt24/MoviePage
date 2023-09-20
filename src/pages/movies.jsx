import { useState, useEffect } from "react";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
import { Link } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
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
        setIsLoading(false);
        console.log("finally");
      });
  }, []);

  return (
    <div>
      <p>Movies:</p>

      {isLoading ? <PacmanLoader /> : false}
      {movies.map((movie) => {
        // console.log(movie);
        return (
          <p key={movie.id}>
            <Link to={"/movie/" + movie.id}>{movie.title}</Link>
          </p>
        );
      })}
    </div>
  );
}
