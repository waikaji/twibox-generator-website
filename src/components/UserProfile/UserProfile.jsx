import React, {useEffect, useState} from "react";
import Popup from "../Popup/Popup";
import UpdateImageUser from "../UpdateImageUser/UpdateImageUser";
import Avatar from "../../img/avatar-image.webp";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actionType from "../../constants/actionTypes";
import { getUser } from "../../actions/users";

import "./UserProfile.css";

const UserProfile = ({count, total}) => {
  const userProfile = JSON.parse(localStorage.getItem("profile"))

  const [buttonPopup, setButtonPopup] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser(userProfile.result.id))
  }, [dispatch, userProfile]) 

  const {user} = useSelector(state => state.users)
  
  const logout = () => {
    dispatch({ type: actionType.LOGOUT })
    navigate("/")
  }
  return (
    <div className="user-profile">
      <div className="up-profile">
        <div className="image-avatar">
          <img className="card-avatar" src={user.url?user.url:Avatar} alt="" />
          <div className="middle-avatar">
            <div onClick={() => setButtonPopup(true)} className="text-avatar">Ubah Foto</div>
          </div>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <UpdateImageUser id_user={userProfile.result.id} />
          </Popup>
        </div>
        <div className="up-name">
          <h5>{userProfile.result.name}</h5>
          <div className="up-count">
            <div className="up-campaign">
              <label>Kampanye</label>
              <label>{count}</label>
            </div>
            <div className="up-campaign">
              <label>Pengunduh</label>
              <label>{total}</label>
            </div>
          </div>
          <div onClick={logout} className="btn-logout"><span>Logout</span></div>
        </div>
      </div>
      
    </div>
    
  );
}

export default UserProfile