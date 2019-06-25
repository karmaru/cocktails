import React, {Component} from 'react';
import './App.css';
import Splash from '../src/Components/Splash/Splash'
import Header from '../src/Components/Header/Header'
import routes from './routes'

export default class App extends Component {
  
// render () {
//   // let {idDrink, strDrink, strDrinkThumb} = this.state.cocktails.drinks
//   console.log('cocktails', this.state.cocktails)
//   console.log('random cocktail', this.state.cocktail)
  render() {
    
    return (
    
      <div>
        <Header />
        {routes}
      </div>
      
    );
  }
}

