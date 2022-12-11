import React, { useState } from "react";
import moment from "moment";
import Popup from "../Popup/Popup";
import Delete from "../Delete/Delete";
import UpdateCampaign from "../UpdateCampaign/UpdateCampaign";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import "../Card/Card.css";
import "./CardEdit.css";

const CardEdit = ({data}) => {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [buttonPopup1, setButtonPopup1] = useState(false)
  const [buttonPopup2, setButtonPopup2] = useState(false)

  return (
    <div className="card">
      <div className="thumbnail">
        <img className="card-img" src={data.url} alt=""/>
        <div className="middle">
          <div className="text">Lihat</div>
        </div>
      </div>
      <div className="c-title">
        <h4>{data.title}</h4>
        <div className="c-support">
          <span><PeopleAltIcon fontSize="small"/> {`${data.downloader}`} Pengunduh</span>
        </div>
        <div className="c-support">
          <span><AccessTimeIcon fontSize="small"/>{`${moment(data.created_at.split("T")[0].split("-").join(""), "YYYYMMDD").fromNow()}`}</span>
        </div>
      </div>
      <div className="card-edit">
        <button onClick={() => setButtonPopup(true)}  className="btn-ubah">Edit</button>
        <button onClick={() => setButtonPopup1(true)} className="btn-delete"><DeleteIcon /></button>
      </div>
      <div className="card-edit">
        <button onClick={() => setButtonPopup2(true)} className="btn-image"><CameraAltIcon fontSize="small" /> Ubah Gambar</button>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <UpdateCampaign id_campaign={data.id} editImage={false}/>
      </Popup>

      <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
        <Delete id_campaign={data.id} setTrigger={setButtonPopup1}/>
      </Popup>

      <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
        <UpdateCampaign id_campaign={data.id} editImage={true}/>
      </Popup>
    </div>
  )
}

export default CardEdit