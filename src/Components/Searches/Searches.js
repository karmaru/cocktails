import React, { Component } from "react";
import axios from 'axios'


export default class Searches extends Component {

  constructor() {
    super();

    this.state = {
        search: 'rum',
        cocktails: []
    }
    
  }

async componentDidMount() {
await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.search}`).then(res => {
    this.setState({
    cocktails: res.data.drinks
    });
});
}

render () {
    {this.state.cocktails.map(drinks => {
        return (
            <div  key={drinks.idDrink}>
                <h1>{drinks.strDrink}</h1>
            </div>
        )
    })}
    return (
        <div>Cocktail Results</div>
    )
}

}