import React from "react";
import AvatarImage from "../../img/avatar-image.webp";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "./TwibbonProfile.css";

function TwibbonProfile() {
  return (
    <div className="tp-campaign">
      <img src={AvatarImage} alt="avatar"/>
      <h4>Wira Ardi</h4>
      <h2>Hari Kemerdekaan</h2>
      <div className="tp-attribute">
        <span><PeopleAltIcon /> 1 Pendukung</span>
        <span><AccessTimeIcon /> 5 Hari yang lalu</span>
        <h5>Deskripsi kampanye ini adalah tentang kemerdekaan</h5>
      </div>
    </div>
  )
}

export default TwibbonProfile;