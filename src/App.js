import "./App.css";
import Button from "./Components/Button";
import Dropdown from "./Components/Dropdown";
import PureDropdown from "./Components/PureDropdown";

const options = [
  { id: 0, value: "Dog", label: "Dog" },
  { id: 1, value: "Cat", label: "Cat" },
  { id: 2, value: "Frontender", label: "Frontender" },
];

function App() {
  return (
    <header className="App-header">
      <h2>Button:</h2>
      <Button />
      <h2>PureDropdown:</h2>
      <PureDropdown options={options} />
      <h2>Dropdown:</h2>
      <Dropdown />
    </header>
  );
}

export default App;
