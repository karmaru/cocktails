const initialState = {
    name: '',
    email: '',
    id: 0,
    avatar: ''
  };
  
  const UPDATE_USER = "UPDATE_USER";
  const CLEAR_USER = "CLEAR_USER";
  
  export function updateUser(user) {
    return {
      type: UPDATE_USER,
      payload: user
    };
  }
  
  export function clearUser() {
    return {
      type: CLEAR_USER
    };
  }
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_USER:
        const { name, email, user_id, avatar } = action.payload;
        return { ...state, name, email, id: user_id, avatar };
      case CLEAR_USER:
        return { ...state, ...initialState };
      default:
        return state;
    }
  }