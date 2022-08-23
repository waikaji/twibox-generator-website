import React, { useState } from "react"
import CardEdit from "../CardEdit/CardEdit"
import Create from "../Create/Create"
import Popup from "../Popup/Popup"
import "./UserCampaign.css"

const UserCampaign = () => {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <div className="user-campaign">
      <div className="uc-title">
        <h2>Kampanye Saya</h2>
        <button className="button" onClick={() => setButtonPopup(true)}>Buat Kampanye</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}> 
            <Create/>
        </Popup>
      </div>
      <div className="uc-campaign">
        <CardEdit/>
        <CardEdit/>
        <CardEdit/>
        <CardEdit/>
        <CardEdit/>
        <CardEdit/>
        <CardEdit/>
      </div>
    </div>
  );
}

export default UserCampaign