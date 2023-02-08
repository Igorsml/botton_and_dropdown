import React from "react";
import "./style.css";
import options from "./options";

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.isOpen = false;
    this.isClicked = false;
    this.state = { isHovered: false };
  }

  handlePick = () => {
    this.isClicked = true;
  };

  handleHover = () => {
    this.setState((prevState) => ({
      isHovered: !prevState.isHovered,
    }));
  };

  render() {
    const dropdownClass = "dropdown";
    const hoverClass = this.isHovered ? "dropdown-bg" : "";

    return (
      <select className={dropdownClass}>
        {options.map((option) => {
          return (
            <option
              key={option.id}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHover}
              className={`${hoverClass}`}
            >
              {option.value}
            </option>
          );
        })}
      </select>
    );
  }
}

/*
нужно просто инпут с выпадахой
у тебя состояние isOpen true/false и все по логике. верстка еще
выбор итема на клик
еще состояние selectedItemId: string | undefined
*/
