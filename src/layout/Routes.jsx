import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Body from "../components/Body";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
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
