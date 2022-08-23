import React from "react";
import "./Delete.css";
import "../CardEdit/CardEdit";

const Delete = () => {
  return (
    <div className="delete">
      <h4>Apakah anda ingin menghapus kampanye ini?</h4>
      <p>Kampanye ini akan terhapus permanen</p>
      <div className="p-button">
        <button className="btn-delete">Hapus Kampanye</button>
        <button className="btn-back">Kembali</button>
      </div>
    </div>
  );
}

export default Delete