import React, { Component } from "react";

export default class GetStarted extends Component {
  render() {
    const { clicked } = this.props;
    return (
      <div className="backgrounnd">
        <img src="images/Bg 2.1.png" className="bg-1" />
        <img src="images/object 1.png" className="bg-2" />
        <div className="text">
          <h1>HURRY</h1>
          <p>HUNGER DONT WAIT</p>
        </div>
        <div className="btn">
          <button className="btn-1" onClick={clicked}>
            <h1>GET STARTED</h1>
            <p>Avail Best Offers & Discount Only For You</p>
          </button>
          <button className="btn-2">
            <p>Continue Without Login</p>
          </button>
          <button className="btn-2" onClick={clicked}>
            <p>
              Already a Tiffin Member <span> Login</span>
            </p>
          </button>
        </div>
      </div>
    );
  }
}
