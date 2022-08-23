import React from "react";
import "./Create.css";

function Create() {
  return (
  <div className="create">
    <h3>Create Campaign</h3>

    <h4>Title</h4>
    <input type="text" id="title" name="title"/>

    <h4>Description</h4>
    <textarea id="description" name="description" rows="4"></textarea>

    <h4>Upload Image</h4>
    <input type="file" id="file" name="file"/>

    <br/>
    <input className="button btn-submit" type="submit" />
  </div>
  );
}

export default Create;