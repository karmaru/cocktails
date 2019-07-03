import React, { Component } from "react";
import martini from '../../Images/martini_logo.png'
// import Register from '../Register/Register'
import {Link} from 'react-router-dom'
import LoginModal from '../Login/LoginModal'
import RegisterModal from '../Register/RegisterModal'
import {Modal, ButtonToolbar, } from 'react-bootstrap'
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../redux/auth_reducer";

import './Splash.css'

class Splash extends Component {
  constructor () {
    super()

    this.state = {
      addModalShow: false,
      addModalShowReg: false
    }
  }

render() {

  let addModalClose = () => this.setState({addModalShow: false})
  let addModalCloseReg = () => this.setState({addModalShowReg: false})
  let logFinished = () => 
  {
    this.setState({addModalShow: false})
    this.props.history.push("/dashboard");
  }

  let logFinishedReg = () => 
  {
    this.setState({addModalShow: false})
    this.props.history.push("/dashboard");
  }


    return (
    <ButtonToolbar>  
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column',width: '100vw', height: '70vh', alignItems: 'center', alignContent: 'center'}}>
      <div style={{diplay: 'flex', justifyContent: 'center', alignItems: 'center', flex:1}}>
      <img style={{justifyContent: 'center', alignItems: 'center', height: '50vh', marginTop: '10vh'}} src={martini} alt=''/>
      </div>
      <LoginModal className="openmodal"
          show={this.state.addModalShow} onHide={addModalClose} logFinished={logFinished}/>
      <RegisterModal className="openmodal"
          show={this.state.addModalShowReg} onHide={addModalCloseReg} logFinishedReg={logFinishedReg}/>
      <div style={{display: 'flex'}}>  
        
        <div style={{display: 'flex',justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <button style={{color: 'black', textDecoration: 'none', fontFamily: 'Lobster Two', fontSize: '30px', justifyContent: 'center', alignItems: 'center', margin: '20px', width: '100px', borderRadius: '10px'}} onClick={() => this.setState({addModalShowReg: true})}>Register</button>
          <br/>
          <h1 style={{color: 'black', textDecoration: 'none', fontFamily: 'Lobster Two', fontSize: '30px', justifyContent: 'center', alignItems: 'center', margin: '20px'}}>or</h1>
          <br/>
          {/* <Link style={{color: 'black', textDecoration: 'none', fontFamily: 'Lobster Two', fontSize: '40px', justifyContent: 'center', alignItems: 'center', margin: '20px',border: '1px solid black', padding: '5px'}}to='/login' >Login</Link> */}
          <button style={{color: 'black', textDecoration: 'none', fontFamily: 'Lobster Two', fontSize: '30px', justifyContent: 'center', alignItems: 'center', margin: '20px', width: '100px', borderRadius: '10px'}} onClick={() => this.setState({addModalShow: true})}>Login</button>
          
        </div>
      </div>
      </div>
    </ButtonToolbar>  
    );
    }  
  }

export default Splash;