import React, { Component } from "react";
import OtpInput from "react-otp-input";

export default class Mobileno extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      otp: "",
    };
  }
  handleChange = (otp) => this.setState({ otp });
  render() {
    const change = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
    return (
      <div className="backgrounnd">
        <img src="images/Bg 2.3.png" className="bg-1" />
        <img src="images/object 3.png" className="bg-2" />
        <div className="phoneno">
          <h1>LOGIN</h1>
          <label for="number">EnterYour Phone Number</label>
          <div className="number">
            <p>+91</p>
            <input name="number" value={this.state.number} onChange={change} />
          </div>
        </div>
        <div className="OTP">
          <h1>VERIFY OTP</h1>
          OTP Sent to {this.state.number}
          <br />
          <div className="verify">
            <OtpInput
              value={this.state.otp}
              onChange={this.handleChange}
              numInputs={6}
              separator={<span>-</span>}
            />
          </div>
          <div className="grid">
            <a href="#"> Change Number</a>
            <p>
              Auto Detetect in 00:00
              <a href="#"> Resend</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
