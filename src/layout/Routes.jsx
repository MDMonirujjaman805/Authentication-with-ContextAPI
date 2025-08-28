import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Body from "../components/Body";
import Orders from "../components/orders";
import PrivateRouter from "../router/PrivateRouter";

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
      {
        path: "orders",
        element:<PrivateRouter><Orders></Orders></PrivateRouter>,
      },
    ],
  },
]);
