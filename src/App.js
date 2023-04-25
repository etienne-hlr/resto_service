import "./App.css";
import NavBarHeader from "./components/header";
import Carte from "./pages/Carte";
import CommandList from "./components/list_command";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
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
          {/* <CommandList items={["coca", "ice tea", "dorelei", "spritz"]} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
