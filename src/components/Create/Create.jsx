import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom"
import {postCampaign} from "../../actions/campaign"
import "./Create.css";

function Create() {
  const user = JSON.parse(localStorage.getItem("profile"))
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [campaignData, setCampaignData] = useState({
    title:"",
    id_user:user.result.id,
    description:"",
  })
  const [file, setFile] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("file", file)
    formData.append("title", campaignData.title)
    formData.append("id_user", campaignData.id_user)
    formData.append("description", campaignData.description)
    dispatch(postCampaign(formData,navigate))
  } 

  const handleImage = (e) => {
    const image = e.target.files[0]
    setFile(image)
  }

  const handleChange = (e) => {
    setCampaignData({...campaignData, [e.target.name]: e.target.value})
  }

  return (
  <div className="create">
    <h3>Create Campaign</h3>
      <form onSubmit={handleSubmit} >
        <h4>Title</h4>
        <input onChange={handleChange} type="text" id="title" name="title"/>

        <h4>Description</h4>
        <textarea onChange={handleChange} id="description" name="description" rows="4"></textarea>

        <h4>Upload Image</h4>
        <input onChange={handleImage} type="file" id="image_filename" name="image_filename" accept="image/jpeg, image/png, image/jpg"/>

        <br/>
        <input className="button btn-submit" type="submit" />
      </form>
  </div>
  );
}

export default Create;