import React, { useEffect, useState } from "react"
import CardEdit from "../CardEdit/CardEdit"
import Create from "../Create/Create"
import Popup from "../Popup/Popup"
import {useDispatch, useSelector} from "react-redux"
import { getMyCampaign } from "../../actions/campaign"
import "./UserCampaign.css"

const UserCampaign = () => {
  const [buttonPopup, setButtonPopup] = useState(false)
  const dispatch = useDispatch()

  const user = JSON.parse(localStorage.getItem("profile"))

  useEffect(() => {
    dispatch(getMyCampaign(user.result.id))
  }, [user, dispatch])

  const {campaigns} = useSelector(state => state.campaign)
  
  return (
    <div className="user-campaign">
      <div className="uc-title">
        <h2>Kampanye Saya</h2>
        {/* <button className="button" onClick={() => setButtonPopup(true)}>Buat Kampanye</button> */}
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}> 
            <Create/>
        </Popup>
      </div>
      <div className="uc-campaign">
        {campaigns.map((campaign) => (
          <CardEdit key={campaign.id} data={campaign}/>
        ))}
      </div>
    </div>
  );
}

export default UserCampaign