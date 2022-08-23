import React, { useState } from "react";
import Popup from "../Popup/Popup";
import Delete from "../Delete/Delete";
import UpdateCampaign from "../UpdateCampaign/UpdateCampaign";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import TestImage from "../../img/test_image.png";
import "../Card/Card.css";
import "./CardEdit.css";

const CardEdit = () => {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [buttonPopup1, setButtonPopup1] = useState(false)
  const [buttonPopup2, setButtonPopup2] = useState(false)

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
          <span><PeopleAltIcon fontSize="small"/> 73rb Pendukung</span>
        </div>
        <div className="c-support">
          <span><AccessTimeIcon fontSize="small"/> 5 Hari yang lalu</span>
        </div>
      </div>
      <div className="card-edit">
        <button onClick={() => setButtonPopup(true)}  className="btn-ubah">Edit</button>
        <button onClick={() => setButtonPopup1(true)} className="btn-delete"><DeleteIcon /></button>
      </div>
      <button onClick={() => setButtonPopup2(true)} className="btn-image"><CameraAltIcon fontSize="small" /> Ubah Gambar</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <UpdateCampaign editImage={false}/>
      </Popup>

      <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
        <Delete />
      </Popup>

      <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
        <UpdateCampaign editImage={true}/>
      </Popup>
    </div>
  )
}

export default CardEdit