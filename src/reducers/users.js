import {FETCH_ALL_USERS, FETCH_USER, UPDATE_USER} from "../constants/actionTypes"

const reducer = (state = {users:[]}, action) => {
  switch(action.type){
    case FETCH_ALL_USERS:
    case FETCH_USER:
    case UPDATE_USER:
    default:
      return state
  }
}

export default reducer