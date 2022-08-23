import React from "react";
import "../Create/Create.css";

const formTitle = () => {
  return (
    <>
      <h4>Title</h4>
      <input type="text" id="title" name="title"/>

      <h4>Description</h4>
      <textarea id="description" name="description" rows="4"></textarea>
    </>
  );
}

const formImage = () => {
  return (
    <>
      <h4>Upload Image</h4>
      <input type="file" id="file" name="file"/>
    </>
  );
}

const UpdateCampaign = ({editImage}) => {
  return (
    <div className="create">
      <h3>Edit Campaign</h3>
      {editImage?formImage():formTitle()}
      <br />
      <input className="button btn-submit" type="submit" />
    </div>
  );
}

export default UpdateCampaign