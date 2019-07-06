import React, { Component } from "react";

export default class Cocktail extends Component {

  render() {
    // let {idDrink, strDrink, strDrinkThumb} = this.state.cocktail
    // console.log('cocktail component', this.props)
    // console.log('session info', this.props)
    let drink = this.props.cocktail
    return (
    //   <div style={{display: 'flex', height: '70vh', width: '50vw', border: '1px solid black'}}>
            <div style = {{fontFamily: 'Lobster Two', fontSize: '15px', overflow: 'scroll'}}key={drink.idDrink}>
                <img style={{height: '40vh', width: '40vw', objectFit: 'contain', margin: '10px'}}src={drink.strDrinkThumb} alt=''/>
                {/* <img style={{height: '40vh', width: '40vw', objectFit: 'contain', margin: '10px'}}src={martini} alt=''/> */}
                <div style={{justifyContent: 'center', alignItem: 'center', marginBottom: '10px', fontSize: '1.5em'}}>{drink.strDrink}</div>
                <hr/>
                <h5 style={{textDecoration: 'underline', marginBottom: '3px', marginTop: '10px', fontSize: '1.1em'}}>Ingredients</h5>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{width: '25vw'}}>{drink.strIngredient1}</td>
                                <td>{drink.strMeasure1}</td>
                            </tr>
                            <tr>
                                <td style={{width: '25vw'}}>{drink.strIngredient2}</td>
                                <td>{drink.strMeasure2}</td>
                            </tr>
                            <tr>
                                <td style={{width: '25vw'}}>{drink.strIngredient3}</td>
                                <td>{drink.strMeasure3}</td>
                            </tr>
                            <tr>
                                <td style={{width: '25vw'}}>{drink.strIngredient4}</td>
                                <td>{drink.strMeasure4}</td>
                            </tr>
                            <tr>
                                <td style={{width: '25vw'}}>{drink.strIngredient5}</td>
                                <td>{drink.strMeasure5}</td>
                            </tr>
                            <tr>
                                <td style={{width: '25vw'}}>{drink.strIngredient6}</td>
                                <td>{drink.strMeasure6}</td>
                            </tr>
                            <tr>
                                <td style={{width: '25vw'}}>{drink.strIngredient7}</td>
                                <td>{drink.strMeasure7}</td>
                            </tr>
                            <tr>
                                <td style={{width: '25vw'}}>{drink.strIngredient8}</td>
                                <td>{drink.strMeasure8}</td>
                            </tr>
                            <tr>
                                <td style={{width: '25vw'}}>{drink.strIngredient9}</td>
                                <td>{drink.strMeasure9}</td>
                            </tr>
                            <tr>
                                <td style={{width: '25vw'}}>{drink.strIngredient10}</td>
                                <td>{drink.strMeasure10}</td>
                            </tr>
                            <tr>
                                <td style={{width: '25vw'}}>{drink.strIngredient11}</td>
                                <td>{drink.strMeasure11}</td>
                            </tr>
                            <tr>
                                <td style={{width: '25vw'}}>{drink.strIngredient12}</td>
                                <td>{drink.strMeasure12}</td>
                            </tr>
                        </tbody>
                    </table>
                <h5 style={{textDecoration: 'underline', marginBottom: '3px', marginTop: '10px', fontSize: '1.1em'}}>Mixing Instructions</h5>
                <div style={{width: '40vw'}}>{drink.strInstructions}</div>
                
            </div>
          
        
    //   </div>
    )
  }

}
