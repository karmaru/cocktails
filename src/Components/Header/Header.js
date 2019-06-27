import React, { Component } from "react";
import martini from '../../Images/martini_logo.png'
import axios from 'axios'
import {Link, Redirect, withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import { updateDrink } from "../../redux/cocktail_reducer";


class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      idDrink: '',
      search: '',
      comments: ''
    }

    this.logout = this.logout.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  logout() {
    console.log(this.context)
    axios.post('/auth/logout')
    .then(
      () => {
      this.setState({
        search: ''
      })
      this.props.history.push('/')
    })
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

updateSearch() {
let currState = this.state
  {this.props.updateDrink(currState)}
  console.log('from search button', this.state, this.props)
  this.props.history.push('/searches')
}

render () {
  console.log('history', this.props)
  console.log('this.state on header', this.state)
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100vw', backgroundColor: 'pink', height: '10vh'}}>
            <div style={{display: 'flex',align: 'left', justifyContent: 'flex-start', marginLeft: '20px'}}>
            <img style={{justifyContent: 'center', alignItems: 'center', height: '7vh'}} src={martini} alt=''/>
            <span style={{fontFamily: 'Lobster Two', fontSize: '40px', justifyContent: 'center', alignItems: 'center'}}>Liquor Lab</span>
            </div>
            <div style={{display: 'flex', marginRight: '100px'}}>  
            <input 
            type="text"
            // placeholder="search"
            name="search"
            onChange={this.handleInput}
            value={this.state.name}
            style={{width: '25vw', fontFamily: 'Lobster Two', fontSize: '30px', borderRadius: '10px'}}></input>
            <button style={{marginLeft: '15px', width: '150px', height: '40px', fontFamily: 'Lobster Two', fontSize: '30px', borderRadius: '10px'}}
            onClick={this.updateSearch} 
            >Search</button>
            </div>
            <div style={{marginRight: '15px'}}>
              <button  style={{marginLeft: '15px', width: '150px', height: '40px', fontFamily: 'Lobster Two', fontSize: '30px', borderRadius: '10px'}} onClick={this.logout}> Logout </button>
            </div>
        </div>
    )
}

}

function mapStateToProps(state) {
  console.log('drink state', state)
  return {
    idDrink: state.cocktailReducer.idDrink,
    search: state.cocktailReducer.search,
    comments: state.cocktailReducer.comments
    // name: state.authReducer.name
  };
}

export default withRouter(connect(
  mapStateToProps,
  // state => state,
  { updateDrink }
)(Header));