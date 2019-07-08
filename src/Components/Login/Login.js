import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../redux/auth_reducer";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',  
      password: ''
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async login() {
    // console.log('props from modal', this.props)
    const { name, password } = this.state;
    // console.log('from login component', this.state)
    await axios
      .post("/auth/login", { name, password })
      .then(res => {
        this.props.updateUser(res.data);
      })
      .then(
        this.props.logfinished()
        )
      .catch(err => {
        // console.log('2222222', err)
        alert("Please use a valid username and password");
      });

    this.setState({
      name: '',  
      email: '',
      password: ""
    });
  }

//   logout() {
//     axios.post('/api/logout')
//     .then(() => {
//       this.setState({
//         user: {}
//       })
//     .then(res => {
//         this.props.history.push("/");
//     })  
//     });
//   }

  render() {
    // console.log('login component', this.state, this.props)
    // if (this.props.id) {
    //   return <Redirect to="/dashboard" />;
    // }
    return (
      <div style={styles.input}>
        {/* <h1>Login</h1> */}
        <h3 style={styles.text1}>User Name: </h3>
        <input
          
          type="text"
          placeholder="User Name"
          name="name"
          onChange={this.handleInput}
          value={this.state.name}
        />
        {/* <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={this.handleInput}
          value={this.state.email}
        /> */}
        <h3 style={styles.text1}>Password: </h3>
        <input
          
          type="password"
          placeholder="Password"
          name="password"
          onChange={this.handleInput}
          value={this.state.password}
        />
        <button style={styles.button} onClick={() => this.login()}>Login</button>

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

export default withRouter(connect(
  mapStateToProps,
  { updateUser }
)(Login));

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
    height: '22px',
    width: '40px',
    lineHeight: '15px',
    margin: '10px',
    borderRadius: '10px',
    justifyContent: 'center'
  }
}