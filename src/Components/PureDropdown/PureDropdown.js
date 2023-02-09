import React from "react";
import "./style.css";
import Icon from "./Icon";
import options from "./options";

export default class PureDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  toggleClass = () => {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  };

  render() {
    const { label } = this.props;
    console.log(this.state.isClicked);

    return (
      <div className="dropdown-container">
        <div className="dropdown-input">
          <div className="dropdown-selected-value">
            {label}
            <Icon />
          </div>
          <div>
            {options.map((option) => {
              return (
                <option
                  key={option.id}
                  className={this.state.isClicked ? "active-color" : null}
                  onClick={this.toggleClass}
                >
                  {option.value}
                </option>
              );
            })}
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
