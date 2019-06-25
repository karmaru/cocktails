import React, { Component } from "react";
import martini from '../../Images/martini_logo.png'


export default class Splash extends Component {

  constructor() {
    super();

    
  }

render () {
    return (
        <div>
            <div style={{diplay: 'flex', justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor: 'pink', height: '8vh'}}>
            <img style={{justifyContent: 'center', alignItems: 'center', height: '5vh', marginTop: '2vh'}} src={martini} alt=''/>
            <span style={{fontFamily: 'Lobster Two', fontSize: '30px', justifyContent: 'center', alignItems: 'center'}}>Liquor Lab</span>
            </div>
        </div>
    )
}

}