import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Actor() {
  const [actor, setActor] = useState({});
  const { actorId } = useParams();

  useEffect(() => {
    async function loadActor() {
      try {
        const { data } = await axios.get(
          "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/actors/" +
            actorId
        );
        console.log(data);
        setActor(data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("finally");
      }
    }
    loadActor();
  }, []);

  return (
    <div>
      <p>Actor: {actorId}</p>
      <p>Name: {actor.name}</p>
      <p>Character: {actor.character}</p>
      <img src={actor.image} alt="Title Pic"></img>
    </div>
  );
}
