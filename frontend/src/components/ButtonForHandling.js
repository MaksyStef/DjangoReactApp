import { Component } from "react";

export default class Button extends Component {
  state = {
    toggled: false
  }
  constructor(props) {
    super(props);
    this.style = {
      width: "140px",
      height: "36px",
      transition: "all 0.5s",
      scale: 1,
    };
  }

  onClick = e => {
    this.state.toggled = !this.state.toggled;
    e.target.style.scale = this.state.toggled ? 1.5 : 1;
  }

  render() {
    return <button onClick={this.onClick} style={this.style}>{this.props.children}</button>
  }
}