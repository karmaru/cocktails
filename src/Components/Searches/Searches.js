import React, { Component } from "react";
import axios from 'axios'
import {Link, Redirect, withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import { updateDrink } from "../../redux/cocktail_reducer";

class Searches extends Component {

  constructor() {
    super();

    this.state = {
        cocktails: []
    }
    
  }

async componentDidMount() {
await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.props.search}`).then(res => {
    this.setState({
    cocktails: res.data.drinks
    })
})
}

async componentDidUpdate(previousProps) {
    if (previousProps.search != this.props.search) { 
    await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.props.search}`).then(res => {
        this.setState({
        cocktails: res.data.drinks
        })
    })
    }}

render () {
    console.log('props from searches component', this.props, this.state)
    return (
    <div style={{display: 'flex', flexDirection: 'row', 
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	alignContent: 'space-between'}}>
    {this.state.cocktails.map(drinks => {
        return (
            <div style={{ flexDirection: 'row',width: '20vw', height: '20vh', border: '1px solid red', margin: '10px 20px', justifyContent: 'center', alignContent: 'center'}} key={drinks.idDrink}>
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
    { updateDrink }
  )(Searches));