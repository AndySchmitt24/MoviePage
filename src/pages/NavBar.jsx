import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to={`/`}>MovieWorld</Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to={`/movies`}>Movies</Link>
            </li>
            <li>
              <Link to={`/actors`}>Actors</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
