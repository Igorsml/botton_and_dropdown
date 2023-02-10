import React from "react";
import "./style.css";
import Icon from "./Icon";

export default class PureDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, selectedItemId: 1 };
  }

  toggleClass = () => {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  };

  render() {
    return (
      <div className="dropdown-container">
        <div className="dropdown-input">
          <div className="dropdown-selected-value">
            {!this.state.selectedItemId
              ? "Placeholder..."
              : this.props.options.find(
                  (elem) => elem.id === this.state.selectedItemId
                ).label}
            <Icon />
          </div>
        </div>
      </div>
    );
  }
}

/*
нужно просто инпут с выпадахой
у тебя состояние isOpen true/false и все по логике. верстка еще
выбор итема на клик
еще состояние selectedItemId: string | undefined
*/

/*
            

            
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
      */
