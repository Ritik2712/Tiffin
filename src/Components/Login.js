import React, { Component } from "react";

export default class Login extends Component {
  render() {
    const { click } = this.props;
    return (
      <div className="backgrounnd login">
        <img src="images/Bg 2.2.png" className="bg-1" />
        <img src="images/object 2.png" className="bg-2" />
        <div className="btns">
          <h1>LOGIN</h1>
          <button onClick={click}>
            <img src="images/icon _mobile.png" />
            <p>Enter Your Number</p>
          </button>
          <button>
            <img src="images/icon _fb.png" />
            <p>Enter Your Number</p>
          </button>
          <button>
            <img src="images/icon _google.png" />
            <p>Enter Your Number</p>
          </button>
          <button>
            <img src="images/icon _mail.png" />
            <p>Enter Your Number</p>
          </button>
        </div>
        <div className="par">
        <p>By Continuing , You Agree To Out</p>
          <p>
            <a href="#">Tems of Service</a> & <a href="#">Privacy Policy</a>{" "}
          </p>
        </div>
      </div>
    );
  }
}
