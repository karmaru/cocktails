
const initialState = {
    idDrink: 0,
    rating: 0,
    comments: '',
    search: ''
  };
  
  const UPDATE_DRINK = "UPDATE_DRINK";
  const CLEAR_DRINK = "CLEAR_DRINK";
  
  export function updateDrink(drink) {
    return {
      type: UPDATE_DRINK,
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
        console.log('action payload', action.payload)
        return { ...state, idDrink, rating, comments, search };
      case CLEAR_DRINK:
        return { ...state, ...initialState };
      default:
        return state;
    }
  }