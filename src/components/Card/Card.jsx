import React from "react";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "./Card.css";
// import TestImage from "../../img/test_image.png";

function Card({data}) {
  return (
    <div className="card">
      <div className="thumbnail">
        <img className="card-img" src={`${data.url}`} alt=""/>
        <div className="middle">
          <div className="text">Lihat</div>
        </div>
      </div>
      
      <div className="c-title">
        <h4>{data.title}</h4>
        <div className="c-support">
          <span><PeopleAltIcon fontSize="small" /> {`${data.downloader}`} Pengunduh</span>
        </div>
        <div className="c-support">
          <span><AccessTimeIcon fontSize="small" /> 5 Hari yang lalu</span>
        </div>
      </div>
    </div>
  );
}

export default Card;