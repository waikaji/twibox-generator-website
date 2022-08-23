import React from "react";
import "../Create/Create.css";

const UpdateImageUser = () => {
  return (
    <div className="create">
      <h4>Upload Image</h4>
      <input type="file" id="file" name="file"/>
      <br />
      <input className="button btn-submit" type="submit" />
    </div>
  );
}

export default UpdateImageUser