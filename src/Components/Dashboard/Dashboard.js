import React, { Component } from "react";
import axios from 'axios'
import Cocktail from '../Cocktail/Cocktail'


export default class Dashboard extends Component {

  constructor() {
    super();

    this.state = {
        cocktail: []
    }
    
  }

async componentDidMount() {
await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(res => {
    this.setState({
    cocktail: res.data.drinks
    });
});
}


// render () {

render() {
    console.log('dashboard state', this.state.cocktail)
    return (
      <div style={{display: 'flex', height: '80vh', width: '50vw', border: '1px solid black', justifyContent: 'center', marginTop: '3vh', marginLeft: '3vw',shadowOpacity: 0.75,
      shadowRadius: 5,
      shadowColor: 'red',
      shadowOffset: { height: 0, width: 0 },}}>
        {this.state.cocktail.map(drink => {
          return (
        <Cocktail key = {drink.idDrink} cocktail = {drink}/>
        )
        })} 
      </div>
    )
  }

}