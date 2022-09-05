import * as api from "../api"
import {POST_CAMPAIGN, UPDATE_IMAGE_CAMPAIGN, FETCH_MY_CAMPAIGN, FETCH_ALL_CAMPAIGNS, COUNT_DOWNLOADER, SEARCH_CAMPAIGNS, FETCH_CAMPAIGN, UPDATE_CAMPAIGN, DELETE_CAMPAIGN} from "../constants/actionTypes"

export const postCampaign = (campaign, history) => async(dispatch) => {
  try{
    const {data} = await api.postCampaign(campaign)
    dispatch({type: POST_CAMPAIGN, payload: data})
    window.location.reload()
  } catch(error) {
    console.log(error)
  }
}

export const getMyCampaign = (id_user) => async(dispatch) => {
  try{
    const {data} = await api.fetchMyCampaign(id_user)
    dispatch({type: FETCH_MY_CAMPAIGN, payload: data})
  } catch(error) {
    console.log(error)
  }
}

export const getCampaigns = () => async(dispatch) => {
  try{
    const {data} = await api.fetchCampaigns()
    dispatch({type: FETCH_ALL_CAMPAIGNS, payload: data})
  } catch(error) {
    console.log(error)
  }
}

export const clickDownloader = (id) => async(dispatch) => {
  try{
    const {data} = await api.countDownloader(id)
    dispatch({type: COUNT_DOWNLOADER, payload:data})
  } catch(error) {
    console.log(error)
  }
}

export const searchCampaigns = (keyword) => async(dispatch) => {
  try{
    const {data} = await api.searchCampaigns(keyword)
    console.log(data)
    dispatch({type:SEARCH_CAMPAIGNS, payload: data})
  } catch(error) {
    console.log(error)
  }
}

export const getCampaign = (id) => async(dispatch) => {
  try{
    const {data} = await api.fetchCampaign(id)
    dispatch({type:FETCH_CAMPAIGN, payload:data})
  } catch(error) {
    console.log(error)
  }
}

export const updateCampaign = (id, campaign) => async(dispatch) => {
  try{
    const {data} = await api.updateCampaign(id, campaign)
    dispatch({type:UPDATE_CAMPAIGN, payload:data})
    window.location.reload()
  } catch(error) {
    console.log(error)
  }
}

export const updateImageCampaign = (id, campaign) => async(dispatch) => {
  try {
    console.log(campaign)
    const {data} = await api.updateImageCampaign(id, campaign)
    console.log(data)
    dispatch({type:UPDATE_IMAGE_CAMPAIGN, payload:data})
    window.location.reload()
  }catch(error) {
    console.log(error)
  }
}

export const deleteCampaign = (id) => async(dispatch) => {
  try{
    const {data} = await api.deleteCampaign(id)
    dispatch({type:DELETE_CAMPAIGN, payload:data})
  } catch(error) {
    console.log(error)
  }
}
