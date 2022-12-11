import * as api from "../api"
import {FETCH_ALL_USERS, FETCH_USER, UPDATE_USER, UPDATE_AVATAR} from "../constants/actionTypes"

export const getUsers = () => async (dispatch) => {
  try {
    const {data} = await api.fetchUsers()
    dispatch({type: FETCH_ALL_USERS, payload: data})
  } catch(error) {
    console.log(error)
  }
}

export const getUser = (id) => async (dispatch) => {
  try{
    const {data} = await api.fetchUser(id)
    dispatch({type: FETCH_USER, payload: data})
  }catch(error) {
    console.log(error)
  }
}

export const updateUser = (id, user) => async (dispatch) => {
  try{
    const {data} = await api.updateUser(id, user)
    dispatch({type: UPDATE_USER, payload: data})
  }catch(error) {
    console.log(error)
  }
}

export const updateAvatar = (id, avatar) => async (dispatch) => {
  try {
    const {data} = await api.updateAvatar(id, avatar)
    dispatch({type: UPDATE_AVATAR, payload:data})
    window.location.reload();
  } catch(error) {
    console.log(error)
  }
}