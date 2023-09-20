import { useParams } from "react-router-dom";

export default function Movie() {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <div>
      <p>Movienummer:{movieId}</p>
      <p>Movie</p>;
    </div>
  );
}
