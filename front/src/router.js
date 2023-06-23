import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./pages/Authentication/Signup";
import Signin from "./pages/Authentication/Signin";

import { lazy } from "react";

const Carte = lazy(() => import("./pages/Carte"));
const CommandList = lazy(() => import("./pages/CommandList"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Carte />,
      },
      {
        path: "/carte",
        element: <Carte />,
      },
      {
        path: "/commandes",
        element: (
          <CommandList list={["coca", "ice tea", "dorelei", "spritz"]} />
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);
