import React, {useState} from "react";
import Popup from "../Popup/Popup";
import UpdateImageUser from "../UpdateImageUser/UpdateImageUser";
import Avatar from "../../img/avatar-image.webp";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import * as actionType from "../../constants/actionTypes"

import "./UserProfile.css";

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("profile"))

  const [buttonPopup, setButtonPopup] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    dispatch({ type: actionType.LOGOUT })
    navigate("/")
  }

  return (
    <div className="user-profile">
      <div className="up-profile">
        <div className="image-avatar">
          <img className="card-avatar" src={Avatar} alt="" />
          <div className="middle-avatar">
            <div onClick={() => setButtonPopup(true)} className="text-avatar">Ubah Foto</div>
          </div>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <UpdateImageUser />
          </Popup>
        </div>
        <div className="up-name">
          <h5>{user.result.name}</h5>
          <div className="up-count">
            <div className="up-campaign">
              <label>Kampanye</label>
              <label>20</label>
            </div>
            <div className="up-campaign">
              <label>Pendukung</label>
              <label>5</label>
            </div>
          </div>
          <div onClick={logout} className="btn-logout"><span>Logout</span></div>
        </div>
      </div>
      
    </div>
    
  );
}

export default UserProfile