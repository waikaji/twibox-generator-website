import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:1000/api"})

API.interceptors.request.use((req) => {
  if(localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).accessToken
    }`
  }
  return req
})

export const fetchUsers = () => API.get("/users")
export const fetchUser = (id) => API.get(`/users/${id}`)
// export const fetchUsersByEmail = () => API.get("/users/email")
export const updateUser = (id, updatedUser) => API.patch(`/users/${id}`, updatedUser)
export const postCampaign = (formData) => API.post("/campaigns", formData, {
  headers: {
    "Content-type": "multipart/form-data",
  },
})
export const updateAvatar = (id, formData) => API.patch(`/users/avatar/${id}`, formData, {
  headers: {
    "Content-type": "multipart/form-data",
  }
})
export const fetchMyCampaign = (id_user) => API.get(`/campaigns/mycampaign/${id_user}`)
export const updateCampaign = (id, formData) => API.patch(`/campaigns/${id}`, formData)
export const deleteCampaign = (id) => API.delete(`/campaigns/${id}`)
export const updateImageCampaign = (id, formData) => API.patch(`/campaigns/image/${id}`, formData, {
  headers: {
    "Content-type": "multipart/form-data",
  },
})

const AUTH_API = axios.create({ baseURL: "http://localhost:4000/api"})

export const login = (formData) => AUTH_API.post("/auth/login", formData)
export const register = (formData) => AUTH_API.post("/auth/register", formData)
export const fetchCampaigns = (page, limit) => AUTH_API.get(`/campaigns?page=${page}&limit=${limit}`)
export const countDownloader = (id) => AUTH_API.patch(`/campaigns/downloader/${id}`)
export const searchCampaigns = (keyword) => AUTH_API.get(`/campaigns/search?keyword=${keyword}`)
export const fetchCampaign = (id) => AUTH_API.get(`/campaigns/${id}`) 
