import React, { Component } from "react";
import axios from 'axios'
import Cocktail from '../Cocktail/Cocktail'
import {Link, Redirect, withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import { updateDrink } from "../../redux/cocktail_reducer";
import Comments from '../Comments/Comments'


class Dashboard extends Component {

  constructor() {
    super();

    this.state = {
        cocktail: []
    }
    
  }

async componentDidMount() {
if (!this.props.idDrink) {
await axios.get(`https://www.thecocktaildb.com/api/json/v2/8673533/random.php`).then(res => {
    this.setState({
    cocktail: res.data.drinks
    });
})}
else {
    await axios.get(`https://www.thecocktaildb.com/api/json/v2/8673533/lookup.php?i=${this.props.idDrink}`).then(res => {
        this.setState({
        cocktail: res.data.drinks
        });
    })
}
}


// render () {

render() {
    console.log('dashboard state', this.state.cocktail)
    console.log('dashboard props', this.props)
    return (
        <div style={{display: 'flex'}}>
      <div style={{display: 'flex', height: '80vh', width: '45vw', border: '1px solid black', justifyContent: 'center', marginTop: '3vh', marginLeft: '3vw',boxShadow: '20px 20px', shadowOpacity: 0.75,
      shadowRadius: 5,
      shadowColor: 'red',
      shadowOffset: { height: 0, width: 0 },}}>
        {this.state.cocktail.map(drink => {
          return (
        <Cocktail key = {drink.idDrink} cocktail = {drink}/>
        )
        })} 
      </div>
            <div style={{display: 'flex', height: '80vh', width: '45vw', border: '1px solid black', justifyContent: 'center', marginTop: '3vh', marginLeft: '3vw',boxShadow: '20px 20px',shadowOpacity: 0.75,
      shadowRadius: 5,
      shadowColor: 'red',
      shadowOffset: { height: 0, width: 0 },}}>
          <Comments NameDrink = {this.state.cocktail.strDrink}/>
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
      comments: state.cocktailReducer.comments,
      userId: state.authReducer.id
      // name: state.authReducer.name
    };
  }
  
  export default withRouter(connect(
    mapStateToProps,
    // state => state,
    { updateDrink }
  )(Dashboard));