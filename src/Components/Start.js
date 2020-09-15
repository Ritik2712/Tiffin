import React, { Component } from "react";
import Background from "./Background";
import GetStarted from "./GetStarted";
import Login from "./Login";
import Mobileno from "./Mobileno";

export default class Start extends Component {
  constructor() {
    super();
    this.state = {
      state: 0,
    };
  }
  render() {
    const change = () => {
      setTimeout(() => {
        this.setState({ state: 1 });
      }, 2000);
    };
    switch (this.state.state) {
      case 0:
        var slide = <Background change={change} />;
        break;
      case 1:
        var clicked = () => {
          this.setState({ state: 2 });
        };
        var slide = <GetStarted clicked={clicked} />;
        break;
      case 2:
        var click = () => {
          this.setState({ state: 3 });
        };
        var slide = <Login click={click} />;
        break;
      case 3:
        var slide = <Mobileno />;
        break;
      default:
        break;
    }

    return <div>{slide}</div>;
  }
}
