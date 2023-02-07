import "./App.css";
import Button from "./Components/button";
import Dropdown from "./Components/dropdown";

function App() {
  return (
    <header className="App-header">
      <Button label={"Vsesoki"} isPressed />
      <Dropdown />
    </header>
  );
}

export default App;
