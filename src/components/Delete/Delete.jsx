import React from "react";
import {useDispatch} from "react-redux"
import { deleteCampaign } from "../../actions/campaign";
import "./Delete.css";
import "../CardEdit/CardEdit";

const Delete = ({id_campaign, setTrigger}) => {
  const dispatch = useDispatch()

  const clickDelete = () => {
    dispatch(deleteCampaign(id_campaign))
  }

  return (
    <div className="delete">
      <h4>Apakah anda ingin menghapus kampanye ini?</h4>
      <p>Kampanye ini akan terhapus permanen</p>
      <div className="p-button">
        <button onClick={clickDelete} className="btn-delete">Hapus Kampanye</button>
        <button onClick={() => setTrigger(false)} className="btn-back">Kembali</button>
      </div>
    </div>
  );
}

export default Delete