import React, {useState,useEffect} from "react";
import AvatarImage from "../../img/avatar-image.webp";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "./TwibbonProfile.css";

function TwibbonProfile({data}) {
  const user = JSON.parse(localStorage.getItem("profile"))
  const [campaign, setCampaign] = useState({title:"", description:""})
  useEffect(() => {
    const timer = setTimeout(() => {
      setCampaign({...campaign, title:data[0].title, description:data[0].description})
    }, 500);

		return () => clearTimeout(timer);
  }, [setCampaign, campaign, data])
  return (  
    <div className="tp-campaign">
      <img src={AvatarImage} alt="avatar"/>
      <h4>{user.result.name}</h4>
      <h2>{campaign.title}</h2>
      <div className="tp-attribute">
        {/* <span><PeopleAltIcon /> 1000 Pendukung</span>
        <span><AccessTimeIcon /> 5 Hari yang lalu</span> */}
        <h5>{campaign.description}</h5>
      </div>
    </div>
  )
}

export default TwibbonProfile;