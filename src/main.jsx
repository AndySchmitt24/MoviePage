import ReactDOM from "react-dom/client";
import "./pages/NavBar.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/home";
import Movies from "./pages/movies";
import Actors from "./pages/actors";
import { RootLayout } from "./rootLayout";
import Movie from "./pages/movie";
import Actor from "./pages/actor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "actors",
        element: <Actors />,
      },
      {
        path: "movie/:movieId",
        element: <Movie />,
      },
      {
        path: "actor/:actorId",
        element: <Actor />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
