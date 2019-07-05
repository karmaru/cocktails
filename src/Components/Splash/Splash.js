import React, { Component } from "react";
import './Splash.css'
import martini from '../../Images/martini_logo.png'
import LoginModal from '../Login/LoginModal'
import RegisterModal from '../Register/RegisterModal'
import {ButtonToolbar} from 'react-bootstrap'

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
  let addModalCloseReg = () => {this.setState({addModalShowReg: false})}

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
    <div className='wrap_Spl'>
      <div>
        <img className='splashImg' src={martini} alt=''/>
        </div>
        <LoginModal className="openmodal"
            show={this.state.addModalShow} onHide={addModalClose} logFinished={logFinished}/>
        <RegisterModal className="openmodal"
            show={this.state.addModalShowReg} onHide={addModalCloseReg} logFinishedReg={logFinishedReg}/>
        <div>  
        <div className='logItems_Spl'>
          <button className='button_Spl' onClick={() => this.setState({addModalShowReg: true})}>Register</button>
          <h1 style={{fontFamily: 'Lobster Two', fontSize: '30px'}}>or</h1>
          <button className='button_Spl' onClick={() => this.setState({addModalShow: true})}>Login</button>
        </div>
      </div>
    </div>
    </ButtonToolbar>  
    );
  }  
}

export default Splash

// let styles = {
// wrap: {
//   display: 'flex',
//   justifyContent: 'center',
//   flexDirection: 'column',
//   width: '100vw',
//   height: '70vh',
//   alignItems: 'center',
//   alignContent: 'center'
// },
  
// button: {
// color: 'black',
// textDecoration: 'none',
// fontFamily: 'Lobster Two',
// fontSize: '30px',
// justifyContent: 'center',
// alignItems: 'center',
// margin: '20px',
// width: '100px',
// borderRadius: '10px'
// },

// splashImg: {
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '50vh',
//   marginTop: '10vh'
// },

// logItems: {
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignContent: 'center',
//   alignItems: 'center',
//   flexDirection: 'row'
// }
// }