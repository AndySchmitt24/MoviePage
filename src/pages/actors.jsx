import { useState, useEffect } from "react";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
import { Link } from "react-router-dom";

export default function Actors() {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/actors"
      )
      .then(({ data }) => {
        console.log(data);
        setActors(data);
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
      <h1>Actors:</h1>

      {isLoading ? <PacmanLoader /> : false}
      {actors.map((actor) => {
        return (
          <p key={actor.id}>
            <Link to={"/actor/" + actor.id}>{actor.name}</Link>
          </p>
        );
      })}
    </div>
  );
}
