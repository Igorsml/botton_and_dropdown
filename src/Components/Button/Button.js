import React from "react";
import classNames from "classnames";
import "./style.css";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false, isClicked: false };
  }

  handleHover = () => {
    this.setState((prevState) => ({
      isHovered: !prevState.isHovered && !prevState.isClicked,
    }));
  };

  render() {
    const hoverClass = this.state.isHovered ? "btn-hovered" : "";
    const clickClass = this.isClicked ? "btn-pressed" : "";

    return (
      <button
        onClick={this.handleHover}
        className={`btn ${hoverClass} ${clickClass}`}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        Vsesoki
      </button>
    );
  }
}

Button.defaultProps = {
  label: "Empty button",
};

/*const { isPressed, isHovered, label } = this.props;

const btnClass = classNames("btn", {
  "btn-pressed": isPressed,
  "btn-hovered": !isPressed && isHovered,
}); */
