import React, {useState,useEffect} from "react";
import AvatarImage from "../../img/avatar-image.webp";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/users";
import moment from "moment";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "./TwibbonProfile.css";

function TwibbonProfile({data}) {
  const dispatch = useDispatch()

  const userProfile = JSON.parse(localStorage.getItem("profile"))
  const [campaign, setCampaign] = useState({title:"", description:"", downloader:0, created_at:""})
  useEffect(() => {
    const timer = setTimeout(() => {
      setCampaign({...campaign, title:data[0].title, description:data[0].description, downloader:data[0].downloader, created_at:data[0].created_at})
    }, 500);

		return () => clearTimeout(timer);
  }, [setCampaign, campaign, data])

  useEffect(() => {
    dispatch(getUser(userProfile.result.id))
  }, [dispatch, userProfile]) 

  const {user} = useSelector(state => state.users)

  return (  
    <div className="tp-campaign">
      <img src={user.url?user.url:AvatarImage} alt="avatar"/>
      <h3>{userProfile.result.name}</h3>
      <h2>{campaign.title}</h2>
      <div className="tp-attribute">
        <span><PeopleAltIcon />  {campaign.downloader} Pengunduh</span>
        <span><AccessTimeIcon />  {`${moment(campaign.created_at.split("T")[0].split("-").join(""), "YYYYMMDD").fromNow()}`}</span>
        <h5>{campaign.description}</h5>
      </div>
    </div>
  )
}

export default TwibbonProfile;