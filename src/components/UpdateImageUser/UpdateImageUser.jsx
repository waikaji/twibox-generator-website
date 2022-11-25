import React, {useState} from "react";
import "../Create/Create.css";
import { useDispatch } from "react-redux";

const UpdateImageUser = () => {

  const dispatch = useDispatch();
  const [file, setFile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    // dispatch(updateImage);
  }

  const handleImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
  }

  return (
    <div className="create">
      <h3>Upload Image</h3>
      <form onSubmit={handleSubmit}>
        <input onChange={handleImage} className="input-image" type="file" id="image_filename" name="image_filename" accept="image/jpeg, image/png, image/jpg"/>
        <input className="button btn-submit" type="submit" />
      </form>
    </div>
  );
}

export default UpdateImageUser