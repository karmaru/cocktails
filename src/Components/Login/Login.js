import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../redux/auth_reducer";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',  
      email: '',
      password: ''
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login() {
    const { name, email, password } = this.state;
    console.log('from login component', this.state)
    axios
      .post("/auth/login", { name, email, password })
      .then(res => {
        this.props.updateUser(res.data);
        this.props.history.push("/");
      })
      .catch(err => {
        alert("Please use a valid email and password");
      });

    this.setState({
      name: '',  
      email: '',
      password: ""
    });
  }

  render() {
    console.log('login component', this.state, this.props)
    if (this.props.id) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="User Name"
          name="name"
          onChange={this.handleInput}
          value={this.state.name}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={this.handleInput}
          value={this.state.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={this.handleInput}
          value={this.state.password}
        />
        <button onClick={() => this.login()}>Login</button>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.authReducer.id,
    name: state.authReducer.name
  };
}

export default connect(
  mapStateToProps,
  { updateUser }
)(Login);