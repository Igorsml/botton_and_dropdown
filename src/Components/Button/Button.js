import React from "react";
import ReactDOM from "react-dom/client";
import cn from "classnames";

export default class Button extends React.Component {
  render() {
    const { isPressed, isHovered, label } = this.props;

    const btnClass = cn("btn", {
      "btn-pressed": isPressed,
      "btn-hovered": !isPressed && isHovered,
    });
    return <button className={btnClass}>{label}</button>;
  }
}
