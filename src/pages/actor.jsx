import { useParams } from "react-router-dom";

export default function Actor() {
  const { actorId } = useParams();
  return <p>Actor {actorId}</p>;
}
