import React, { Component } from "react";
import axios from 'axios'
import Cocktail from '../Cocktail/Cocktail'
import {Link, Redirect, withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import { updateDrink } from "../../redux/cocktail_reducer";


class Dashboard extends Component {

  constructor() {
    super();

    this.state = {
        cocktail: []
    }
    
  }

async componentDidMount() {
if (!this.props.idDrink) {
await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(res => {
    this.setState({
    cocktail: res.data.drinks
    });
})}
else {
    await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.idDrink}`).then(res => {
        this.setState({
        cocktail: res.data.drinks
        });
    })
}
}


// render () {

render() {
    console.log('dashboard state', this.state.cocktail)
    return (
        <div style={{display: 'flex'}}>
      <div style={{display: 'flex', height: '80vh', width: '45vw', border: '1px solid black', justifyContent: 'center', marginTop: '3vh', marginLeft: '3vw',shadowOpacity: 0.75,
      shadowRadius: 5,
      shadowColor: 'red',
      shadowOffset: { height: 0, width: 0 },}}>
        {this.state.cocktail.map(drink => {
          return (
        <Cocktail key = {drink.idDrink} cocktail = {drink}/>
        )
        })} 
      </div>
            <div style={{display: 'flex', height: '80vh', width: '45vw', border: '1px solid black', justifyContent: 'center', marginTop: '3vh', marginLeft: '3vw',shadowOpacity: 0.75,
      shadowRadius: 5,
      shadowColor: 'red',
      shadowOffset: { height: 0, width: 0 },}}>
          <h1>Spot for Comments</h1>
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
  )(Dashboard));