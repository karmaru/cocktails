import React, { Component } from "react";
import axios from 'axios'
import './Dashboard.css'
import Cocktail from '../Cocktail/Cocktail'
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import { updateDrink, updateDrinkId } from "../../redux/cocktail_reducer";
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
    this.state.cocktail.map(drink => {
      return this.props.updateDrinkId(drink.idDrink)
    })
    // console.log('drinkId', this.state)
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
    // console.log('dashboard state', this.state.cocktail)
    // console.log('dashboard props', this.props)
    return (
      <div className='boxes_Dash'style={{display: 'flex'}}>
          <div className='box_Dash'>
            {this.state.cocktail.map(drink => {
              return (
            <Cocktail key = {drink.idDrink} cocktail = {drink}/>
            )
            })} 
          </div>
          <div className='box_Dash'>
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
    { updateDrink, updateDrinkId }
  )(Dashboard));