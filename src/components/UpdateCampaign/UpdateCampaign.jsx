import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { updateCampaign, getCampaign, updateImageCampaign } from "../../actions/campaign";
import "../Create/Create.css";

const UpdateCampaign = ({id_campaign, editImage}) => {

  const [campaignData, setCampaignData] = useState({
    title: "",
    description: "",
  })
  
  const dispatch = useDispatch()
  const [file, setFile] = useState("")

  useEffect(() => {
    dispatch(getCampaign(id_campaign))
  }, [dispatch, id_campaign])
    
  const {campaign} = useSelector(state => state.campaign)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCampaignData({title: campaign[0].title, description: campaign[0].description})
    }, 200)
    return () => clearTimeout(timer)
  }, [campaign, setCampaignData])

  const formImage = () => {
    return (
      <>
        <form onSubmit={submitImageHandle}>
          <h4>Upload Image</h4>
          <input onChange={handleImageChange} type="file" id="file" name="file" required/>
          <br />
          <input className="button btn-submit" type="submit" required/>
        </form>
      </>
    );
  }

  const formTitle = () => {
    return (
      <>
        <form onSubmit={submitEditHandle}>
          <h4>Title</h4>
          <input onChange={handleChange} type="text" id="title" name="title" value={campaignData.title} required/>

          <h4>Description</h4>
          <textarea onChange={handleChange} id="description" name="description" rows="4" value={campaignData.description} required></textarea>
          <br />
          <input className="button btn-submit" type="submit" />
        </form>
      </>
    );
  }

  const handleChange = (e) => {
    setCampaignData({...campaignData, [e.target.name]: e.target.value})
  }

  const handleImageChange = (e) => {
    const image = e.target.files[0]
    setFile(image)
  }

  const submitImageHandle = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("file", file)
    dispatch(updateImageCampaign(id_campaign, formData))
  }

  const submitEditHandle = (e) => {
    e.preventDefault();
    dispatch(updateCampaign(id_campaign, campaignData))
  }

  return (
    <div className="create">
      <h3>Edit Campaign</h3>
      {editImage?formImage():formTitle()}
    </div>
  );
}

export default UpdateCampaign