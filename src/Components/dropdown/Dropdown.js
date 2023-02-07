import React from "react";
import ReactDOM from "react-dom/client";
import cn from "classnames";
import "./style.css";

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.isOpen = false;
  }
  handleChange = () => this;

  render() {
    const dropdownClass = "dropdown";
    const dropdownClassValue = "dropdown-value";
    return (
      <select
        onChange={this.handleChange}
        className={dropdownClass}
        onFocus={(this.size = 4)}
        onBlur={(this.size = 0)}
      >
        <option className={dropdownClassValue} value="Dog">
          Dog
        </option>
        <option className={dropdownClassValue} value="Cat">
          Cat
        </option>
        <option className={dropdownClassValue} value="Frontender">
          Frontender
        </option>
      </select>
    );
  }
}
