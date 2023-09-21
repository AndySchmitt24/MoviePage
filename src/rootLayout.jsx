import { Outlet } from "react-router-dom";
import NavBar from "./pages/NavBar";
import "./pages/NavBar";

export function RootLayout() {
  return (
    <>
      <header>
        <NavBar />
        <br /> {/* TODO muss noch geändert werden */}
        <br />
      </header>
      <h1>The MoviePage</h1>
      <h2>Welcome to the World of Movies!!</h2>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Copyright Andy ✌🏼</p>
      </footer>
    </>
  );
}
