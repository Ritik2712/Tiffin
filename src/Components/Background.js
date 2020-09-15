import React, { Component } from "react";

export default class Background extends Component {
  componentDidMount(){
    this.props.change()
  }
  render() {
    
    return (
      <div className="backgrounnd first">
        <img src="images/Tiffinia_icon_small.png"/>
      </div>
    );
  }
}
