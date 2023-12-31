import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Movie() {
  // const [movie, setMovie] = useState({ cast: [] });
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    async function loadMovie() {
      try {
        const { data } = await axios.get(
          "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/" +
            movieId
        );
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("finally");
      }
    }
    loadMovie();
  }, []);

  return (
    <div>
      <p>Movie: {movie.title}</p>
      <p>Genre: {movie.genre}</p>
      <img src={movie.image} alt="Title Pic"></img>
      {movie.cast &&
        movie.cast.map((character) => {
          console.log(character);
          return (
            <p key={character.id}>
              <Link to={"/actor/" + character.id}>{character.character}</Link>
            </p>
          );
        })}
    </div>
  );
}
