import { createBrowserRouter } from "react-router-dom";
import App from "./App";

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
    ],
  },
]);
