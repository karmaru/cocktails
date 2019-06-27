
const initialState = {
    idDrink: 0,
    rating: 0,
    comments: '',
    search: ''
  };
  
  const UPDATE_DRINK = "UPDATE_DRINK";
  const CLEAR_DRINK = "CLEAR_DRINK";
  const UPDATE_DRINKID = 'UPDATE_DRINKID';
  
  export function updateDrink(drink) {
    console.log('action payload from reducer2', drink)
    return {
       
      type: UPDATE_DRINK,
      payload: drink
    };
  }

  export function updateDrinkId(drink) {
    console.log('action payload from reducer', drink)
    return {
      type: UPDATE_DRINKID,
      payload: drink
    };
  }
  
  export function clearDrink() {
    return {
      type: CLEAR_DRINK
    };
  }
  
  export default function drinkReducer(state = initialState, action) {
    
    switch (action.type) {
      case UPDATE_DRINK:
        const { idDrink, rating, comments, search } = action.payload;
        // console.log('action payload', action.payload)
        return { ...state, idDrink, rating, comments, search };
      case UPDATE_DRINKID:
        // const { idDrink } = action.payload;
        return { ...state, idDrink: action.payload};
      case CLEAR_DRINK:
        return { ...state, ...initialState };
      default:
        return state;
    }
  }