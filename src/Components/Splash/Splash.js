import React, { Component } from "react";
import martini from '../../Images/martini_logo.png'
// import Register from '../Register/Register'
import {Link} from 'react-router-dom'

import './Splash.css'

class Splash extends Component {


render() {
    return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column',width: '100vw', height: '70vh', alignItems: 'center', alignContent: 'center'}}>
      <div style={{diplay: 'flex', justifyContent: 'center', alignItems: 'center', flex:1}}>
      <img style={{justifyContent: 'center', alignItems: 'center', height: '50vh', marginTop: '10vh'}} src={martini} alt=''/>
      </div>
      <div style={{display: 'flex'}}>
        <div style={{display: 'flex',justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}>
          {/* <div style={{fontFamily: 'Lobster Two', fontSize: '20px'}}>
            <Link to='/Register' ><button style={{fontFamily: 'Lobster Two', fontSize: '20px', width: '200px', margin: '5vh'}} >Login or Register</button></Link>
          </div> */}
          <Link to='/register' >Register</Link>
          <Link to='/login' >Login</Link>
        </div>
      </div>
      </div>
      
    );
    }  
  }

export default Splash;