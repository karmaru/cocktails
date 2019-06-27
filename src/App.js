import React, {Component} from 'react';
import './App.css';
import Header from '../src/Components/Header/Header'
import routes from './routes'
// import axios from 'axios'
// import {Link, Redirect} from 'react-router-dom'

export default class App extends Component {
  constructor () {
    super()

    this.state = {
          user: {}
    }
    // this.logout = this.logout.bind(this);
  }

// logout() {
//   console.log('it works')
//   axios.post('/auth/logout')
//   .then(
//     () => {
//     this.setState({
//       user: {}
//     });
//   })
//   .then(res => {
//     this.props.history.push('/')
//   })
//   // <Redirect to="/splash" />
// }

  render() {
    
    return (
    
      <div>
        <Header/>
        {routes}
      </div>
      
    );
  }
}

