import React from "react";
import Select from "react-select";
import options from "./options";
import "./style.css";

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
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
