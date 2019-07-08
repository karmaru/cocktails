import React, { Component } from "react";
import axios from 'axios'
import './Searches.css'
import {withRouter} from 'react-router-dom'
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
await axios.get('https://www.thecocktaildb.com/api/json/v2/8673533/list.php?i=list').then(res =>
    {
    this.setState({
        ingredients: res.data.drinks
    })
})



let check = this.state.ingredients.map(function(e) { return e.strIngredient1.toUpperCase(); }).indexOf(this.props.search.toUpperCase);
console.log('check', check)

if (check === -1) {
    await axios.get(`https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i=${this.props.search}`).then(res => {
        this.setState({
        cocktails: res.data.drinks
    })
})} else if (check !== -1){
        // await axios.get(`https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i=${this.props.search}`).then(res => {
        //     this.setState({
        //         cocktails: res.data.drinks
        //     })
        //     })
        } else {
        alert('That search returned no results')

        }
}

async componentDidUpdate(previousProps) {
    let grammarFunc = (str) => {
        return str.split(' ').map(sen => sen.charAt(0).toUpperCase() + sen.slice(1)).join(',')
      }
    console.log('search compare', previousProps.search)
    if (previousProps.search !== this.props.search) { 
        let combine = grammarFunc(this.props.search)
        console.log('combine', this.props,combine)
        let check = this.state.ingredients.map(function(e) { return e.strIngredient1.toUpperCase()}).indexOf(this.props.search);
        console.log('check2', check, this.state)
        if (check !== -1) {
            // https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis
            await axios.get(`https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i=${this.props.search}`).then(res => {
            this.setState({
            cocktails: res.data.drinks
            })
        })} 
        else if (check === -1) {
            await axios.get(`https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i=${this.props.search}`).then(res => {
            this.setState({
            cocktails: res.data.drinks
            })
        })
        }
        else {
            alert('Your search returned no results')
        }
    }}

getDrink (idDrink)  {
    this.setState({
        drinkID: idDrink
    })
    this.props.updateDrinkId(idDrink)
    this.props.history.push('/dashboard')
}  

render () {
    console.log('props from searches component', this.props, this.state)
    // console.log('redux', reduxState)
    return (
    <div className='all_Search'>
    {this.state.cocktails.map(drinks => {
        return (
            <div onClick={() => this.getDrink(drinks.idDrink)} className='container_Search' key={drinks.idDrink}>
                <img className='img_Search' src={drinks.strDrinkThumb} alt=''/>
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
    // console.log('drink state', state)
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