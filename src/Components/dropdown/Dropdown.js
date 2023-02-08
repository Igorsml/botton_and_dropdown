import React from "react";
import Select from "react-select";
import options from "./options";
import "./style.css";

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.isOpen = false;
    this.isClicked = false;
  }

  handleChange = () => {
    this.isOpen = true;
    console.log(this.isOpen);
  };

  handlePick = () => {
    this.isClicked = true;
    console.log("clicked");
  };

  render() {
    const MyComponent = () => (
      <Select options={options} className={"dropdown"} />
    );

    return <MyComponent />;
  }
}

/*
нужно просто инпут с выпадахой

у тебя состояние isOpen true/false и все по логике. верстка еще

выбор итема на клик

еще состояние selectedItemId: string | undefined
*/

/* {<option
onClick={this.handlePick}
className={dropdownClassValue}
value="Dog"
>
Dog
</option>
<option
onClick={this.handlePick}
className={dropdownClassValue}
value="Cat"
>
Cat
</option>
<option
onClick={this.handlePick}
className={dropdownClassValue}
value="Frontender"
>
Frontender
</option> }*/
