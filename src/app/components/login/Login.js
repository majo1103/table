import React from "react";

import { Redirect } from "react-router-dom";

import { client } from "../../Client";
import "./Login-Form-Dark.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      shouldRedirect: false,
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.performLogin = this.performLogin.bind(this);
    this.redirectPath = this.redirectPath.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  performLogin(event) {
    if (client.login(this.state.email)) {
      this.setState({ shouldRedirect: true });
    } else {
      this.setState({ message: "Please register first" });
    }
  }

  redirectPath() {
    const locationState = this.props.location.state;
    const pathname =
      locationState && locationState.from && locationState.from.pathname;
    return pathname || "/poll";
  }

  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to={this.redirectPath()} />;
    } else {
      return (
        <div className="login-dark">
          <form onSubmit={this.handleSubmit}>
            <div className="illustration">
              <i className="icon ion-ios-locked-outline" />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
                autoFocus
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                type="submit"
                onClick={this.performLogin}
                disabled={!this.validateForm()}
              >
                Log In
              </button>
            </div>
            <div>
              <label name="message" className="forgot">
                {this.state.message}
              </label>
            </div>
          </form>
        </div>
      );
    }
  }
}
