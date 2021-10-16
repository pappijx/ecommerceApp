import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../general/Input";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
    };
  }

  onChange(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          Sign In to account
        </p>
        <div className="form">
          <Input
            type="email"
            placeholder="enter email"
            value="email"
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Input
            type="password"
            placeholder="enter password"
            value="password"
            onChange={this.onChange}
          />
        </div>
        <button className="btn btn-primary">Sign In</button>
        <p className="my-1">
          Don't Have an account?<Link to="/register">Register</Link>
        </p>
      </div>
    );
  }
}

export default Login;
