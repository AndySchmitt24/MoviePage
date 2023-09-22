import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [randomMovie, setRandomMovie] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/"
      )
      .then(({ data }) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(randomIndex);
        return axios.get(
          "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/" +
            data[randomIndex].id
        );
      })
      .then(({ data }) => {
        setRandomMovie(data);
      })
      .catch(() => {
        console.log("Error");
      })
      .finally(() => {
        console.log("finally");
      });
  }, []);

  if (!randomMovie) {
    return <div>Lade...</div>;
  }
  return (
    <div>
      <h2>
        Zufälliger Vorschau: <br /> {randomMovie.title}
      </h2>
      <p>
        <Link to={`movies/` + randomMovie.id}>
          <img src={randomMovie.image} alt={randomMovie.title} />
        </Link>
      </p>
    </div>
  );
}
