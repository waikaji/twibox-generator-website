import React, {useState} from "react";
import Popup from "../Popup/Popup";
import UpdateImageUser from "../UpdateImageUser/UpdateImageUser";
import Avatar from "../../img/avatar-image.webp";
import "./UserProfile.css";

const UserProfile = () => {
  const [buttonPopup, setButtonPopup] = useState(false)

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
          <h5>Wira Ardi Kesuma</h5>
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
          {/* <div className="btn-edit"><span>Ubah Profil</span></div> */}
        </div>
      </div>
      
    </div>
    
  );
}

export default UserProfile