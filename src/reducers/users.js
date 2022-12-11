import {FETCH_ALL_USERS, FETCH_USER, UPDATE_USER, UPDATE_AVATAR} from "../constants/actionTypes"

const reducer = (state = {users:[], user:{}}, action) => {
  switch(action.type){
    case FETCH_ALL_USERS:
    case FETCH_USER:
      return { ...state, user: action.payload.user}
    case UPDATE_USER:
    case UPDATE_AVATAR:  
    default:
      return state
  }
}

export default reducer