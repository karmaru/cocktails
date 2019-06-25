import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../redux/auth_reducer";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      name: ''
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  register() {
    const { name, email, password } = this.state;

    axios
      .post("/auth/register", { name, email, password })
      .then(res => {
        this.props.updateUser(res.data);
        this.props.history.push("/");
      })
      .catch(err => {
        alert("User Already Exist Try Logging IN");
      });
  }

  render() {
      console.log('from register', this.state)
      // console.log('from regis auth', state.authReducer.id)
    // if (this.props.id) {
    //   return <Redirect to="/dashboard" />;
    // }
    return (
      <div>
        <h1>Register</h1>
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
        <button onClick={() => this.register()}>Register</button>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('register state', state)
  return {
    id: state.authReducer.id,
    name: state.authReducer.name
  };
}

export default connect(
  mapStateToProps,
  { updateUser }
)(Register);