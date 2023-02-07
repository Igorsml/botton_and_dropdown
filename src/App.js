import "./App.css";
import Button from "./Components/button";
import Dropdown from "./Components/dropdown";

function App() {
  return (
    <header className="App-header">
      <Button label={"Vsesoki"} />
      <Dropdown />
    </header>
  );
}

export default App;

/*
нужно просто инпут с выпадахой

у тебя состояние isOpen true/false и все по логике. верстка еще

выбор итема на клик

еще состояние selectedItemId: string | undefined
*/
