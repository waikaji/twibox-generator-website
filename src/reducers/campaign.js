import {POST_CAMPAIGN, START_LOADING, END_LOADING, UPDATE_IMAGE_CAMPAIGN, FETCH_MY_CAMPAIGN, FETCH_ALL_CAMPAIGNS, COUNT_DOWNLOADER, SEARCH_CAMPAIGNS, FETCH_CAMPAIGN, UPDATE_CAMPAIGN, DELETE_CAMPAIGN} from "../constants/actionTypes"

const reducer = (state = {isLoading: true, campaigns: [], count: 0, total: 0}, action) => {
  switch(action.type){
    case START_LOADING:
      return { ...state, isLoading: true}
    case END_LOADING:
      return { ...state, isLoading: false}
    case FETCH_ALL_CAMPAIGNS:
      return {...state, campaigns: action.payload.campaigns}
    case FETCH_MY_CAMPAIGN:
      return {...state, campaigns: action.payload.campaigns, count: action.payload.count, total:action.payload.total}
    case FETCH_CAMPAIGN:
      return {...state, campaign: action.payload.campaigns}
    case SEARCH_CAMPAIGNS:
      return {...state, campaigns: action.payload.campaigns}
    case POST_CAMPAIGN:
    case DELETE_CAMPAIGN:
    case UPDATE_CAMPAIGN:
    case COUNT_DOWNLOADER:
    case UPDATE_IMAGE_CAMPAIGN:
    default:
      return state
  }
}

export default reducer