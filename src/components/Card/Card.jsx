import React from "react";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "./Card.css";
import TestImage from "../../img/test_image.png";

function Card() {
  return (
    <div className="card">
      <div className="thumbnail">
        <img className="card-img" src={TestImage} alt=""/>
        <div className="middle">
          <div className="text">Lihat</div>
        </div>
      </div>
      
      <div className="c-title">
        <h4>Hari Kemerdekaan</h4>
        <div className="c-support">
          <span><PeopleAltIcon fontSize="small" /> 73rb Pendukung</span>
        </div>
        <div className="c-support">
          <span><AccessTimeIcon fontSize="small" /> 5 Hari yang lalu</span>
        </div>
      </div>
    </div>
  );
}

export default Card;