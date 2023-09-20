import { Outlet } from "react-router-dom";
export function RootLayout() {
  return (
    <>
      <header>
        <h1>The MoviesApp</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Copyright Taktsoft Campus</p>
      </footer>
    </>
  );
}
