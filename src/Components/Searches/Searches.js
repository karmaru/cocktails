import React, { Component } from "react";
import axios from 'axios'
import {Link, Redirect, withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import { updateDrink, updateDrinkId } from "../../redux/cocktail_reducer";

class Searches extends Component {

  constructor() {
    super();

    this.state = {
        cocktails: [],
        ingredients: [],
        drinkID: ''
    }
    
    // this.getDrink = this.getDrink.bind(this);  

  }

async componentDidMount() {
await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list').then
(res => {
    this.setState({
        ingredients: res.data.drinks
    })
})
let check = this.state.ingredients.map(function(e) { return e.strIngredient1.toUpperCase(); }).indexOf(this.props.search.toUpperCase);
console.log('check', check)
if (check != -1) {
    await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${this.props.search}`).then(res => {
        this.setState({
        cocktails: res.data.drinks
    })
})} else {
        await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.props.search}`).then(res => {
            this.setState({
                cocktails: res.data.drinks
            })
            })
        }
}

async componentDidUpdate(previousProps) {
    if (previousProps.search != this.props.search) { 
        let check = this.state.ingredients.map(function(e) { return e.strIngredient1.toUpperCase(); })   .indexOf(this.props.search.toUpperCase);
        console.log('check', check)
        if (check != -1) {
            await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${this.props.search}`).then(res => {
            this.setState({
            cocktails: res.data.drinks
            })
        })} 
        else {
            await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.props.search}`).then(res => {
            this.setState({
            cocktails: res.data.drinks
            })
        })
        }
    }}

getDrink (idDrink)  {
    this.setState({
        drinkID: idDrink
    })
    {this.props.updateDrinkId(idDrink)}
    this.props.history.push('/dashboard')
}  

render () {
    console.log('props from searches component', this.props, this.state)
    return (
    <div style={{display: 'flex', flexDirection: 'row', 
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	alignContent: 'space-between'}}>
    {this.state.cocktails.map(drinks => {
        return (
            <div onClick={() => this.getDrink(drinks.idDrink)} style={{ flexDirection: 'row',width: '20vw', height: '20vh', border: '1px solid red', margin: '10px 20px', justifyContent: 'center', alignContent: 'center'}} key={drinks.idDrink}>
                <img style={{height: '10vh', width: '10vw', objectFit: 'contain', margin: '10px', alignItems: 'center', justifyContent: 'center'}}src={drinks.strDrinkThumb} alt=''/>
                <div>
                <h5>{drinks.strDrink}</h5>
                </div>
            </div>
        )
    })}
    </div>
    )
}

}

function mapStateToProps(state) {
    console.log('drink state', state)
    return {
      search: state.cocktailReducer.search
      // name: state.authReducer.name
    };
  }
  
  export default withRouter(connect(
    mapStateToProps,
    // state => state,
    { updateDrink, updateDrinkId }
  )(Searches));