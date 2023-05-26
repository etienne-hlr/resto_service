import "./App.css";
import NavBarHeader from "./components/nav_bar_header";
import Carte from "./pages/Carte";
import CommandList from "./pages/CommandList";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <>
      <NavBarHeader />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
