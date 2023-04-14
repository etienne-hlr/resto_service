import "./App.css";
import NavBarHeader from "./components/header";
import Carte from "./pages/Carte";
import CommandList from "./components/list_command";

function App() {
  return (
    <div>
      {/* <NavBarHeader />
      <Carte /> */}
      <CommandList items={["coca", "ice tea", "dorelei", "spritz"]} />
    </div>
  );
}

export default App;
