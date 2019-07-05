import React, { Component } from "react";
import './Header.css'
import martini from '../../Images/martini_logo.png'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import { updateDrink } from "../../redux/cocktail_reducer";



class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      idDrink: '',
      search: '',
      comments: '',
      addModalShow: false,

    }

    this.logout = this.logout.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  logout() {
    // console.log(this.context)
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
  this.props.updateDrink(currState)
  this.props.history.push('/searches')
}

render () {
  // console.log('Props on Header', this.props)
  // console.log('this.state on header', this.state)
  // console.log('session info header', )
    return (
        <div className='navbar_Hdr'>
          
            <div
             style={{display: 'flex',align: 'left', justifyContent: 'flex-start'}}
             >
            <img className='logo_Hdr' src={martini} alt=''/>
            <span className='title_Hdr'>Liquor Lab</span>
            </div>
              <div className='search_Hdr'>  
              <input className='input_Hdr'
              type="text"
              name="search"
              onChange={this.handleInput}
              value={this.state.name}>
              </input>
              <button className='button_Hdr' onClick={this.updateSearch}>Search</button>
              </div>
            <div>
              <button  className='button_Hdr' onClick={this.logout}> Logout </button>
            </div>
        </div>
    )
}

}

function mapStateToProps(state) {
  // console.log('drink state', state)
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


