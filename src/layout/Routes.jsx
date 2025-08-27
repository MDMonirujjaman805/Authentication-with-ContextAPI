import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
