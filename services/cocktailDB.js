import axios from 'axios'
export function getCocktailsList () {
    return axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then (response => {
        console.log(response)
    })
}