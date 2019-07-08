import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../../redux/auth_reducer";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      name: '',
      birthdate: '',
      avatar: ''
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  register() {
    const { name,birthdate, email, password, avatar } = this.state;

    axios
      .post("/auth/register", { name, email, password, birthdate, avatar })
      .then(res => {
        this.props.updateUser(res.data)
      })
      .then(
        this.props.logfinishedReg()
          )
        // this.props.history.push("/dashboard")
      .catch(err => {
        if (err === 409){
        alert("User Already Exist Try Logging In")}
        else {
          alert('you are too young')
        }
      });
  }

  render() {
      // console.log('from register', this.state)
      // console.log('from regis auth', state.authReducer.id)
    // if (this.props.id) {
    //   return <Redirect to="/dashboard" />;
    // }
    return (
      <div style={styles.input}>
        <h3 style={styles.text1}>User Name: </h3>
        <input
          type="text"
          placeholder="User Name"
          name="name"
          onChange={this.handleInput}
          value={this.state.name}
        />
        <h3 style={styles.text1}>Email: </h3>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={this.handleInput}
          value={this.state.email}
        />
        <h3 style={styles.text1}>Birth Date: </h3>
        <input
          type="date"
          placeholder="Birthdate"
          name="birthdate"
          onChange={this.handleInput}
          value={this.state.birthdate}
        />
        <h3 style={styles.text1}>Password: </h3>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={this.handleInput}
          value={this.state.password}
        />
        <h3 style={styles.text1}>Avatar URL: </h3>
        <input
          type="text"
          placeholder="Avatar URL"
          name="avatar"
          onChange={this.handleInput}
          value={this.state.avatar}
        />
        <button style={styles.button} onClick={() => this.register()}>Register</button>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('register state', state)
  return {
    id: state.authReducer.id,
    name: state.authReducer.name
  };
}

export default connect(
  mapStateToProps,
  { updateUser }
)(Register);

let styles = {
  text1: {
    fontFamily: 'Lobster Two',
    fontSize: '15px',
    margin: '10px'
  },
  input: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'Lobster Two',
    fontSize: '15px',
    margin: '10px'
  },
  button: {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: 'Lobster Two',
    fontSize: '15px',
    height: '25px',
    width: '55px',
    lineHeight: '15px',
    margin: '10px',
    borderRadius: '10px',
    justifyContent: 'center'
  }
}