import "./App.css";
import Button from "./Components/Button";
import Dropdown from "./Components/Dropdown";
import PureDropdown from "./Components/PureDropdown";

function App() {
  return (
    <header className="App-header">
      <h2>Button:</h2>
      <Button />
      <h2>PureDropdown:</h2>
      <PureDropdown label="Placeholder" />
      <h2>Dropdown:</h2>
      <Dropdown />
    </header>
  );
}

export default App;
