import "./App.css";
import NavBarHeader from "./components/nav_bar_header";
import Carte from "./pages/Carte";
import CommandList from "./pages/CommandList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Profile from "./components/test_webcam";

function App() {
  return (
    // <>
    //   <Profile />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBarHeader />}>
          <Route path="/" element={<Carte />} />
          <Route path="/home" element={<Carte />} />
          <Route
            path="/commandes"
            element={
              <CommandList list={["coca", "ice tea", "dorelei", "spritz"]} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
